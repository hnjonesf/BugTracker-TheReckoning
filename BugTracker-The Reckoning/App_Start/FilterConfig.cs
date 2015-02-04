using System.Web;
using System.Web.Mvc;

namespace BugTracker_The_Reckoning
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
