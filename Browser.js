function Browser()

{

    if(navigator.appName.indexOf("Microsoft Internet Explorer") != -1)

    {

        return true;

    }

    return false;

}

function isGoogleChrome()
{
    if(navigator.appName.indexOf("Google Chrome") != -1)
    {
        return true;
    }
    return false;
}
