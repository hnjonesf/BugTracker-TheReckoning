using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BugTracker_The_Reckoning.Models
{
    public class DashboardViewModel
    {
        public ApplicationUser currentUser { get; set; }

        public int numTickets { get; set; }
        public Coordinate[] graphData { get; set; }
    }

    public class Coordinate
    {
        public float x { get; set; }
        public float y { get; set; }
    }
}