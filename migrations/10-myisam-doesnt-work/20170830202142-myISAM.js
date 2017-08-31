'use strict';

const models = require('../models');

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      change all tables to myisam
    */

		models.sequelize.query('SET storage_engine = MYISAM;');
		models.sequelize.query('ALTER TABLE AppGroups ENGINE = MyISAM;');
		models.sequelize.query('ALTER TABLE Apps ENGINE = MyISAM;');
		models.sequelize.query('ALTER TABLE ResetTokens ENGINE = MyISAM;');
		models.sequelize.query('ALTER TABLE Reports ENGINE = MyISAM;');
		models.sequelize.query('ALTER TABLE CaseReferences ENGINE = MyISAM;');
		models.sequelize.query('ALTER TABLE DismissedMessages ENGINE = MyISAM;');
		models.sequelize.query('ALTER TABLE ihc_preset_old ENGINE = MyISAM;');
		models.sequelize.query('ALTER TABLE IhcPresets ENGINE = MyISAM;');
		models.sequelize.query('ALTER TABLE reporting_bak ENGINE = MyISAM;');
		models.sequelize.query('ALTER TABLE reporting_old ENGINE = MyISAM;');
		models.sequelize.query('ALTER TABLE SequelizeMeta ENGINE = MyISAM;');
		models.sequelize.query('ALTER TABLE Snippets ENGINE = MyISAM;');
		models.sequelize.query('ALTER TABLE soft_tissue_db ENGINE = MyISAM;');
		models.sequelize.query('ALTER TABLE SystemMessages ENGINE = MyISAM;');
		models.sequelize.query('ALTER TABLE Users ENGINE = MyISAM;');
		models.sequelize.query('ALTER TABLE UserSessions ENGINE = MyISAM;');

		return;
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

		// models.sequelize.query('SET storage_engine = InnoDB;');
		// models.sequelize.query('ALTER TABLE * ENGINE = InnoDB;');
		//
		// return;
  }
};
