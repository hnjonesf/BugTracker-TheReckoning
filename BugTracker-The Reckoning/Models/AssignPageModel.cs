using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BugTracker_The_Reckoning.Models
{
    public class AssignPageModel
    {
        public AssignPageModel()
        {
            UserNotProjects = null;
            UserNotTickets = null;
            UserNotRoles = null;
        }
        public string Id { get; set; }
        public string UserName { get; set; }
        public SelectList UserNotProjects { get; set; }
        public SelectList UserNotTickets { get; set; }
        public SelectList UserNotRoles { get; set; }
        public IEnumerable <SelectListItem> newRole { get; set; }
        public IEnumerable <SelectListItem> newProject { get; set; }
        public IEnumerable <SelectListItem> newTicket { get; set; }
    }
}