function callAjaxEx(strURL, strCallBack) {
    var strReturn = "";

    try {
        var XMLHttpRequestObject;
        if (window.XMLHttpRequest) {
            XMLHttpRequestObject = new XMLHttpRequest();
        }
        else if (window.ActiveXObject) {
            XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
        }
        if (XMLHttpRequestObject) {
            XMLHttpRequestObject.open("GET", strURL, true);
            XMLHttpRequestObject.onreadystatechange = function () {
                if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) {
                    try {
                        strReturn = XMLHttpRequestObject.responseText;
                        if (strCallBack.toString().length > 0)
                            eval(strCallBack + "(\"" + strReturn + "\");");
                    }
                    catch (e) {
                        alert(e);
                    }
                    return;
                    // }
                }
            }
            XMLHttpRequestObject.send(null);
        }
    }
    catch (e) {
        alert(e.message + ";" + e.toString());
    }
    return strReturn;
}

function subReturn(ret) {
    var StrRet = ret;
    alert(ret);


}