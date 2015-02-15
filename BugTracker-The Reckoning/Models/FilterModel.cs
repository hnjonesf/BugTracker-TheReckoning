using System.Collections.Generic;
using System.Web.Mvc;
namespace BugTracker_The_Reckoning.Models
{
    public class FilterModel
    {
        public FilterModel()
        {
            this.typeList = new MultiSelectList();
            this.statusList = new MultiSelectList();
            this.priorityList = new MultiSelectList();
            this.projList = new MultiSelectList();
            this.ownerList = new MultiSelectList();
            this.assignedList = new MultiSelectList();
        }
        // Stuff viewbag with filter options
        public MultiSelectList typeList { get; set; }
        public MultiSelectList statusList { get; set; }
        public MultiSelectList priorityList { get; set; }
        public MultiSelectList projList { get; set; }
        public MultiSelectList ownerList { get; set; }
        public MultiSelectList assignedList { get; set; }
    }
}

