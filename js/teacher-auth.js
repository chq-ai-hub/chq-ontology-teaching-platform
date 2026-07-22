/**
 * Teacher Authentication Module
 * Manages teacher identity verification for the courseware system.
 *
 * Usage:
 *   - Include this script in your HTML before </body>
 *   - Call TeacherAuth.init() on DOMContentLoaded
 *   - Check TeacherAuth.isTeacher() to gate teacher-only features
 *   - body gets class "teacher-unlocked" when teacher is authenticated
 */

(function () {
  'use strict';

  var STORAGE_KEY = 'ontology_teacher_unlock_v1';
  var TEACHER_PASSWORD = 'ontology-teacher-2026';

  var TeacherAuth = {
    /**
     * Initialize the auth module.
     * Checks existing session and updates body class.
     */
    init: function () {
      if (this.isTeacher()) {
        document.body.classList.add('teacher-unlocked');
      }
    },

    /**
     * Check if current user is authenticated as teacher.
     * @returns {boolean}
     */
    isTeacher: function () {
      try {
        return localStorage.getItem(STORAGE_KEY) === '1';
      } catch (e) {
        return false;
      }
    },

    /**
     * Attempt to authenticate with given password.
     * @param {string} password
     * @returns {boolean} true if authentication succeeded
     */
    unlock: function (password) {
      if (password === TEACHER_PASSWORD) {
        try {
          localStorage.setItem(STORAGE_KEY, '1');
        } catch (e) { /* ignore */ }
        document.body.classList.add('teacher-unlocked');

        // Dispatch custom event for UI updates
        var event = new CustomEvent('teacher-auth-change', { detail: { isTeacher: true } });
        document.dispatchEvent(event);

        return true;
      }
      return false;
    },

    /**
     * Logout and reload the page.
     */
    logout: function () {
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch (e) { /* ignore */ }
      location.reload();
    },

    /**
     * Listen for cross-tab storage changes.
     * If another tab logs out, this tab will also reload.
     */
    _initCrossTabSync: function () {
      var self = this;
      window.addEventListener('storage', function (e) {
        if (e.key === STORAGE_KEY && e.newValue !== '1') {
          location.reload();
        }
      });
    }
  };

  // Initialize cross-tab sync
  TeacherAuth._initCrossTabSync();

  // Auto-init when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      TeacherAuth.init();
    });
  } else {
    TeacherAuth.init();
  }

  // Export to global scope
  window.TeacherAuth = TeacherAuth;
})();
