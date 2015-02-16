using System.Collections.Generic;
using System.Web.Mvc;
namespace BugTracker_The_Reckoning.Models
{
    public class FilterModel
    {
        // Stuff viewbag with filter options
        public MultiSelectList assignedList { get; set; }
        public List<string> assignedListStr { get; set; }

        public MultiSelectList typeList { get; set; }
        public List<string> typeListStr { get; set; }

        public MultiSelectList statusList { get; set; }
        public List<string> statusListStr { get; set; }

        public MultiSelectList priorityList { get; set; }
        public List<string> priorityListStr { get; set; }

        public MultiSelectList projList { get; set; }
        public List<string> projListStr { get; set; }

        public MultiSelectList ownerList { get; set; }
        public List<string> ownerListStr { get; set; }
    }
}

