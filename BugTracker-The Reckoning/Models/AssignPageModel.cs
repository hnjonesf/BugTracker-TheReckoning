using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BugTracker_The_Reckoning.Models
{
    public class AssignPageModel
    {
        public string Id { get; set; }
        public string UserName { get; set; }
        public SelectList UserNotProjects { get; set; }
        public SelectList UserNotTickets { get; set; }
        public SelectList UserNotRoles { get; set; }
    }
}