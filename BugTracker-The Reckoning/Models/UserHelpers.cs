﻿using System.Data.Entity;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System.Linq;
using System;
using System.Web.Mvc;
using System.ComponentModel.DataAnnotations;

namespace BugTracker_The_Reckoning.Models
{
    public class UserRolesHelper
    {
        private UserManager<ApplicationUser> manager = 
            new UserManager<ApplicationUser>(
            new UserStore<ApplicationUser>(
                new ApplicationDbContext()));

        public bool IsUserInRole(string userId, string roleName)
        {
            return manager.IsInRole(userId, roleName);
        }

        public IList<string> ListUserRoles(string userId)
        {
            return manager.GetRoles(userId);
        }

        public bool AddUserToRole(string userId, string roleName)
        {
            var result = manager.AddToRole(userId, roleName);
            return result.Succeeded;
        }
       
        public bool RemoveUserFromRole(string userId, string roleName)
        {
            return manager.RemoveFromRole(userId, roleName).Succeeded;
        }
        public IList<ApplicationUser> UsersInRole(string roleName)
        {
            var resultList = new List<ApplicationUser>();
            foreach (var user in manager.Users)
            {
                if (IsUserInRole(user.Id, roleName))
                {
                    resultList.Add(user);
                }
            }
            return resultList;
        }

        [Display(Name = "Users Not In Role")]
        public IList<ApplicationUser> UsersNOTInRole(string roleName)
        {
            var resultList = new List<ApplicationUser>();
            foreach (var user in manager.Users)
            {
                if (!IsUserInRole(user.Id, roleName))
                {
                    resultList.Add(user);
                }
            }
            return resultList;
        }
    }
    public class UserProjectsHelper
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        public bool IsOnProject(string userId, int projectId)
        {
            return db.Users.Find(userId).Projects.Any(p => p.Id == projectId);
        }
        //public async Task AddUserToProject(string userId, int projectId){
        //    if(!await this.IsOnProject(userId, projectId)){
        //        // add a ProjectUsers entry for this user and project
        //        var pu = new ProjectUsers { ProjectId = projectId, UserId = userId };
        //        db.ProjectUsers.Add(pu);
        //        db.SaveChanges();
        //    }
        //}
        //public async Task RemoveUserFromProject(string userId, int projectId)
        //{
        //    if (await this.IsOnProject(userId, projectId))
        //    {
        //        //remove the ProjectUsers entry for this user and project
        //        db.ProjectUsers.Remove(db.ProjectUsers.SingleAsync(p => p.ProjectId == projectId && p.UserId == userId).Result);
        //        db.SaveChanges();
        //    }
        //}
        //public async Task<IList<ApplicationUser>> UsersOnProject(int projectId)
        //{
        //    var userList = new List<ApplicationUser>();
        //    foreach (var user in db.Users)
        //    {
        //        if(await this.IsOnProject(user.Id, projectId)){
        //            userList.Add(user);
        //        }
        //    }
        //    return null;
        //}
        //public async Task<IList<ApplicationUser>> UsersNOTOnProject(int projectId)
        //{
        //    var userList = new List<ApplicationUser>();
        //    foreach (var user in db.Users)
        //    {
        //        if (!await this.IsOnProject(user.Id, projectId))
        //        {
        //            userList.Add(user);
        //        }
        //    }
        //    return null;
        //}
        /// <summary>
        /// Gets a list of all users assigned to the specific project.
        /// </summary>
        /// <param name="projectId">The integer Id of the specified project</param>
        /// <param name="roleName">The Role of users to return</param>
        /// <returns></returns>
        //public async Task<IList<ApplicationUser>> UsersOnProject(int projectId, string roleName)
        //{
        //    var userList = new List<ApplicationUser>();
        //    var rolesHelper = new UserRolesHelper();
        //    foreach (var user in db.Users)
        //    {
        //        if (await this.IsOnProject(user.Id, projectId) &&
        //            rolesHelper.IsUserInRole(user.Id, roleName))
        //        {
        //            userList.Add(user);
        //        }
        //    }
        //    return null;
        //}

        /// <summary>
        /// Returns a list of a user's projects
        /// </summary>
        /// <param name="userId">The Id of the specified user</param>
        /// <returns>List of Project objects to which the user is assigned.</returns>
        //public async Task<IList<Project>> ListUserProjects(string userId)
        //{
        //    var projectList = new List<Project>();
        //    foreach (var proj in db.Projects)
        //    {
        //        if (await this.IsOnProject(userId, proj.Id))
        //        {
        //            projectList.Add(proj);
        //        }
        //    }
        //    return projectList;
        //}
    }
}