import '@testing-library/cypress/add-commands';
import 'cypress-wait-until';

// playwright commands
const addCommand = (commandName, legacyCommandName, promiseFn) => {
  Cypress.Commands.add(commandName, parameters => {
    if (promiseFn) {
      return promiseFn(cy.task(commandName, parameters));
    }
    return cy.task(commandName, parameters);
  });

  if (legacyCommandName != null) {
    Cypress.Commands.add(legacyCommandName, parameters => {
      if (promiseFn) {
        return promiseFn(cy.task(commandName, parameters));
      }
      return cy.task(legacyCommandName, parameters);
    });
  }
};

Cypress.Commands.add('selectProvider', providerName => {
  return cy.task('selectProvider', providerName);
});

Cypress.Commands.add('initPlaywright', () => {
  return cy.task('initPlaywright');
});

Cypress.Commands.add('assignWindows', () => {
  return cy.task('assignWindows');
});

Cypress.Commands.add('assignActiveTabName', tabName => {
  return cy.task('assignActiveTabName', tabName);
});

Cypress.Commands.add('isMetamaskWindowActive', () => {
  return cy.task('isMetamaskWindowActive');
});

Cypress.Commands.add('isCypressWindowActive', () => {
  return cy.task('isCypressWindowActive');
});

Cypress.Commands.add('switchToCypressWindow', () => {
  return cy.task('switchToCypressWindow');
});

Cypress.Commands.add('switchToMetamaskWindow', () => {
  return cy.task('switchToMetamaskWindow');
});

Cypress.Commands.add('switchToMetamaskNotification', () => {
  return cy.task('switchToMetamaskNotification');
});

// metamask commands

Cypress.Commands.add('addMetamaskNetwork', network => {
  return cy.task('addMetamaskNetwork', network);
});

Cypress.Commands.add('changeMetamaskNetwork', network => {
  return cy.task('changeMetamaskNetwork', network);
});

Cypress.Commands.add('importMetamaskAccount', privateKey => {
  return cy.task('importMetamaskAccount', privateKey);
});

Cypress.Commands.add('createMetamaskAccount', accountName => {
  return cy.task('createMetamaskAccount', accountName);
});

Cypress.Commands.add('renameMetamaskAccount', newAccountName => {
  return cy.task('renameMetamaskAccount', newAccountName);
});

Cypress.Commands.add('switchMetamaskAccount', accountNameOrAccountNumber => {
  return cy.task('switchMetamaskAccount', accountNameOrAccountNumber);
});

Cypress.Commands.add('getMetamaskWalletAddress', () => {
  cy.task('getMetamaskWalletAddress').then(address => {
    return address;
  });
});

Cypress.Commands.add(
  'activateAdvancedGasControlInMetamask',
  (skipSetup = false) => {
    return cy.task('activateAdvancedGasControlInMetamask', skipSetup);
  },
);

Cypress.Commands.add('activateShowHexDataInMetamask', (skipSetup = false) => {
  return cy.task('activateShowHexDataInMetamask', skipSetup);
});

Cypress.Commands.add(
  'activateTestnetConversionInMetamask',
  (skipSetup = false) => {
    return cy.task('activateTestnetConversionInMetamask', skipSetup);
  },
);

Cypress.Commands.add(
  'activateShowTestnetNetworksInMetamask',
  (skipSetup = false) => {
    return cy.task('activateShowTestnetNetworksInMetamask', skipSetup);
  },
);

Cypress.Commands.add('activateCustomNonceInMetamask', (skipSetup = false) => {
  return cy.task('activateCustomNonceInMetamask', skipSetup);
});

Cypress.Commands.add(
  'activateDismissBackupReminderInMetamask',
  (skipSetup = false) => {
    return cy.task('activateDismissBackupReminderInMetamask', skipSetup);
  },
);

Cypress.Commands.add(
  'activateEthSignRequestsInMetamask',
  (skipSetup = false) => {
    return cy.task('activateEthSignRequestsInMetamask', skipSetup);
  },
);

Cypress.Commands.add(
  'activateImprovedTokenAllowanceInMetamask',
  (skipSetup = false) => {
    return cy.task('activateImprovedTokenAllowanceInMetamask', skipSetup);
  },
);

Cypress.Commands.add('resetMetamaskAccount', () => {
  return cy.task('resetMetamaskAccount');
});

Cypress.Commands.add('disconnectMetamaskWalletFromDapp', () => {
  return cy.task('disconnectMetamaskWalletFromDapp');
});

Cypress.Commands.add('disconnectMetamaskWalletFromAllDapps', () => {
  return cy.task('disconnectMetamaskWalletFromAllDapps');
});

addCommand('confirmSignatureRequest', 'confirmMetamaskSignatureRequest');

Cypress.Commands.add('confirmMetamaskEncryptionPublicKeyRequest', () => {
  return cy.task('confirmMetamaskEncryptionPublicKeyRequest');
});

Cypress.Commands.add('rejectMetamaskEncryptionPublicKeyRequest', () => {
  return cy.task('rejectMetamaskEncryptionPublicKeyRequest');
});

Cypress.Commands.add('confirmMetamaskDecryptionRequest', () => {
  return cy.task('confirmMetamaskDecryptionRequest');
});

Cypress.Commands.add('rejectMetamaskDecryptionRequest', () => {
  return cy.task('rejectMetamaskDecryptionRequest');
});

Cypress.Commands.add('rejectMetamaskSignatureRequest', () => {
  return cy.task('rejectMetamaskSignatureRequest');
});

Cypress.Commands.add('rejectMetamaskDataSignatureRequest', () => {
  return cy.task('rejectMetamaskDataSignatureRequest');
});

Cypress.Commands.add('confirmMetamaskDataSignatureRequest', () => {
  return cy.task('confirmMetamaskDataSignatureRequest');
});

Cypress.Commands.add('importMetamaskToken', tokenConfig => {
  return cy.task('importMetamaskToken', tokenConfig);
});

Cypress.Commands.add('confirmMetamaskAddToken', () => {
  return cy.task('confirmMetamaskAddToken');
});

Cypress.Commands.add('rejectMetamaskAddToken', () => {
  return cy.task('rejectMetamaskAddToken');
});

Cypress.Commands.add(
  'confirmMetamaskPermissionToSpend',
  (spendLimit = '999999999999999999') => {
    return cy.task('confirmMetamaskPermissionToSpend', spendLimit);
  },
);

Cypress.Commands.add('rejectMetamaskPermissionToSpend', () => {
  return cy.task('rejectMetamaskPermissionToSpend');
});

addCommand('acceptAccess', 'acceptMetamaskAccess');
addCommand('confirmTransaction', 'confirmMetamaskTransaction');
addCommand('rejectMetamaskAccess', 'rejectMetamaskAccess');

Cypress.Commands.add(
  'confirmMetamaskTransactionAndWaitForMining',
  gasConfig => {
    return cy.task('confirmMetamaskTransactionAndWaitForMining', gasConfig);
  },
);

Cypress.Commands.add('rejectMetamaskTransaction', () => {
  return cy.task('rejectMetamaskTransaction');
});

Cypress.Commands.add('openMetamaskTransactionDetails', txIndex => {
  return cy.task('openMetamaskTransactionDetails', txIndex);
});

Cypress.Commands.add('closeMetamaskTransactionDetailsPopup', () => {
  return cy.task('closeMetamaskTransactionDetailsPopup');
});

Cypress.Commands.add('rejectMetamaskPermisionToApproveAll', () => {
  return cy.task('rejectMetamaskPermisionToApproveAll');
});

Cypress.Commands.add('confirmMetamaskPermisionToApproveAll', () => {
  return cy.task('confirmMetamaskPermisionToApproveAll');
});

Cypress.Commands.add('allowMetamaskToAddNetwork', waitForEvent => {
  return cy.task('allowMetamaskToAddNetwork', { waitForEvent });
});

Cypress.Commands.add('rejectMetamaskToAddNetwork', () => {
  return cy.task('rejectMetamaskToAddNetwork');
});

Cypress.Commands.add('allowMetamaskToSwitchNetwork', () => {
  return cy.task('allowMetamaskToSwitchNetwork');
});

Cypress.Commands.add('rejectMetamaskToSwitchNetwork', () => {
  return cy.task('rejectMetamaskToSwitchNetwork');
});

Cypress.Commands.add('allowMetamaskToAddAndSwitchNetwork', () => {
  return cy.task('allowMetamaskToAddAndSwitchNetwork');
});

/**
 * @deprecated
 */
Cypress.Commands.add('unlockMetamask', (password = 'Tester@1234') => {
  return cy.task('unlockMetamask', password);
});
Cypress.Commands.add('unlock', (password = 'Tester@1234') => {
  return cy.task('unlock', password);
});

Cypress.Commands.add('selectWallet', (wallet = 'metamask', mode = 'always') => {
  return cy.task('selectWallet', wallet, mode);
});

addCommand('lock');

addCommand('fetchWalletAddress', 'fetchMetamaskWalletAddress', taskPromise =>
  taskPromise.then(address => address),
);

addCommand('confirmIncorrectNetworkStage');

Cypress.Commands.add(
  'setupMetamask',
  ({
    provider = 'metamask',
    secretWordsOrPrivateKey = 'test test test test test test test test test test test junk',
    network = 'goerli',
    password = 'Tester@1234',
    enableAdvancedSettings = false,
    enableExperimentalSettings = false,
  }) => {
    return cy.task('setup', {
      provider,
      secretWordsOrPrivateKey,
      network,
      password,
      enableAdvancedSettings,
      enableExperimentalSettings,
    });
  },
);

Cypress.Commands.add(
  'setup',
  ({
    provider = 'metamask',
    secretWordsOrPrivateKey = 'test test test test test test test test test test test junk',
    network = 'goerli',
    password = 'Tester@1234',
    enableAdvancedSettings = false,
  }) => {
    return cy.task('setup', {
      provider,
      secretWordsOrPrivateKey,
      network,
      password,
      enableAdvancedSettings,
    });
  },
);

Cypress.Commands.add('getNetwork', () => {
  return cy.task('getNetwork');
});

// Etherscan commands
Cypress.Commands.add('etherscanGetTransactionStatus', txid => {
  return cy.task('etherscanGetTransactionStatus', { txid }, { timeout: 30000 });
});

Cypress.Commands.add('etherscanWaitForTxSuccess', txid => {
  return cy.task('etherscanWaitForTxSuccess', { txid }, { timeout: 120000 });
});

// Helper commands
Cypress.Commands.add('waitForResources', (resources = []) => {
  const globalTimeout = 30000;
  const resourceCheckInterval = 2000;
  const idleTimesInit = 3;
  let idleTimes = idleTimesInit;
  let resourcesLengthPrevious;
  let timeout;

  return new Cypress.Promise((resolve, reject) => {
    const checkIfResourcesLoaded = () => {
      const resourcesLoaded = cy
        .state('window')
        .performance.getEntriesByType('resource')
        .filter(r => !['script', 'xmlhttprequest'].includes(r.initiatorType));

      const allFilesFound = resources.every(resource => {
        const found = resourcesLoaded.filter(resourceLoaded => {
          return resourceLoaded.name.includes(resource.name);
        });
        if (found.length === 0) {
          return false;
        }
        return !resource.number || found.length >= resource.number;
      });

      if (allFilesFound) {
        if (resourcesLoaded.length === resourcesLengthPrevious) {
          idleTimes--;
        } else {
          idleTimes = idleTimesInit;
          resourcesLengthPrevious = resourcesLoaded.length;
        }
      }
      if (!idleTimes) {
        resolve();
        return;
      }

      timeout = setTimeout(checkIfResourcesLoaded, resourceCheckInterval);
    };

    checkIfResourcesLoaded();
    setTimeout(() => {
      reject();
      clearTimeout(timeout);
    }, globalTimeout);
  });
});

// overwrite default cypress commands
if (Cypress.env('RESOURCES_WAIT')) {
  Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
    originalFn(url, options);
    return cy.waitForResources();
  });
}

Cypress.Commands.add(
  'topIsWithinViewport',
  { prevSubject: true },
  (subject, viewportWidth = Cypress.config(`viewportWidth`)) => {
    const bounding = subject[0].getBoundingClientRect();

    const rightBoundOfWindow = viewportWidth;
    const boundingRightLessThanOrEqualRightBoundOfWindow =
      bounding.right <= rightBoundOfWindow;

    expect(bounding.top).to.be.at.least(0);
    expect(bounding.left).to.be.at.least(0);
    // todo: lessThanOrEqual doesn't seem to work
    expect(boundingRightLessThanOrEqualRightBoundOfWindow).to.be.true;

    return subject;
  },
);

Cypress.Commands.add(
  'isWithinViewport',
  { prevSubject: true },
  (
    subject,
    viewportWidth = Cypress.config(`viewportWidth`),
    viewportHeight = Cypress.config(`viewportHeight`),
  ) => {
    const bounding = subject[0].getBoundingClientRect();

    const rightBoundOfWindow = viewportWidth;
    const boundingRightLessThanOrEqualRightBoundOfWindow =
      bounding.right <= rightBoundOfWindow;
    const bottomBoundOfWindow = viewportHeight;
    const boundingBottomLessThanOrEqualBottomBoundOfWindow =
      bounding.bottom <= bottomBoundOfWindow;

    expect(bounding.top).to.be.at.least(0);
    expect(bounding.left).to.be.at.least(0);
    // todo: lessThanOrEqual doesn't seem to work
    expect(boundingRightLessThanOrEqualRightBoundOfWindow).to.be.true;
    expect(boundingBottomLessThanOrEqualBottomBoundOfWindow).to.be.true;

    return subject;
  },
);
