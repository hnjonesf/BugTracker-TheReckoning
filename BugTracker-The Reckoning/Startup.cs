using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(BugTracker_The_Reckoning.Startup))]
namespace BugTracker_The_Reckoning
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
