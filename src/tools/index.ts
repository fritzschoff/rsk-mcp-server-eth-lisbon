import type { Tool } from '@modelcontextprotocol/sdk/types.js';
import {
  callContractHandler,
  erc20BalanceHandler,
  erc20TransferHandler,
  getGasPriceHandler,
  getAddressHandler,
  deployPropertyNFTHandler,
  deployPropertyTokenHandler,
  deployPropertyYieldVaultHandler,
  getNativeBalanceHandler,
} from './handlers.js';

const callContractTool: Tool = {
  name: 'call_contract',
  description: 'Call a contract function on Rootstock Network',
  inputSchema: {
    type: 'object',
    properties: {
      contractAddress: {
        type: 'string',
        description: 'The address of the contract to call',
      },
      functionName: {
        type: 'string',
        description: 'The name of the function to call',
      },
      functionArgs: {
        type: 'array',
        description: 'The arguments to pass to the function',
        items: {
          type: 'string',
        },
      },
      abi: {
        type: 'string',
        description: 'The ABI of the contract',
      },
    },
    required: ['contractAddress', 'functionName', 'abi'],
  },
};

const erc20BalanceTool: Tool = {
  name: 'erc20_balance',
  description: 'Get the balance of an ERC20 token on Rootstock',
  inputSchema: {
    type: 'object',
    properties: {
      contractAddress: {
        type: 'string',
        description: 'The address of the contract to get the balance of',
      },
    },
    required: ['contractAddress'],
  },
};

const erc20TransferTool: Tool = {
  name: 'erc20_transfer',
  description: 'Transfer an ERC20 token on Rootstock',
  inputSchema: {
    type: 'object',
    properties: {
      contractAddress: {
        type: 'string',
        description: 'The address of the contract to transfer the token from',
      },
      toAddress: {
        type: 'string',
        description: 'The address of the recipient',
      },
      amount: {
        type: 'string',
        description: 'The amount of tokens to transfer',
      },
    },
    required: ['contractAddress', 'toAddress', 'amount'],
  },
};

const getGasPriceTool: Tool = {
  name: 'get_gas_price',
  description: 'Get the current gas price on Rootstock Network',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

const getAddressTool: Tool = {
  name: 'get_address',
  description: 'Get the address of the current account',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

const deployPropertyNFTTool: Tool = {
  name: 'deploy_property_nft',
  description: 'Deploy a PropertyNFT contract on Rootstock',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

const deployPropertyTokenTool: Tool = {
  name: 'deploy_property_token',
  description: 'Deploy a PropertyToken contract on Rootstock',
  inputSchema: {
    type: 'object',
    properties: {
      propertyNFTAddress: {
        type: 'string',
        description: 'The address of the PropertyNFT',
      },
      propertyId: {
        type: 'string',
        description: 'The ID of the property',
      },
      name: {
        type: 'string',
        description: 'The name of the property',
      },
      symbol: {
        type: 'string',
        description: 'The symbol of the property',
      },
    },
    required: ['propertyNFTAddress', 'propertyId', 'name', 'symbol'],
  },
};

const deployPropertyYieldVaultTool: Tool = {
  name: 'deploy_property_yield_vault',
  description: 'Deploy a PropertyYieldVault contract on Rootstock',
  inputSchema: {
    type: 'object',
    properties: {
      assetAddress: {
        type: 'string',
        description: 'The address of the underlying ERC20 PropertyToken',
      },
      name: {
        type: 'string',
        description: 'The name of the vault token',
      },
      symbol: {
        type: 'string',
        description: 'The symbol of the vault token',
      },
      propertyNFTAddress: {
        type: 'string',
        description: 'The address of the PropertyNFT',
      },
      propertyId: {
        type: 'string',
        description: 'The ID of the property',
      },
    },
    required: [
      'assetAddress',
      'name',
      'symbol',
      'propertyNFTAddress',
      'propertyId',
    ],
  },
};

const getNativeBalanceTool: Tool = {
  name: 'get_native_balance',
  description: 'Get the balance of the current account in ETH',
  inputSchema: {
    type: 'object',
    properties: {
      useTestnet: {
        type: 'boolean',
        description: 'Whether to use testnet or mainnet for balance check',
      },
    },
    required: ['useTestnet'],
  },
};

export const rskMcpTools: Tool[] = [
  callContractTool,
  erc20BalanceTool,
  erc20TransferTool,
  getGasPriceTool,
  getAddressTool,
  deployPropertyNFTTool,
  deployPropertyTokenTool,
  deployPropertyYieldVaultTool,
  getNativeBalanceTool,
];

// biome-ignore lint/complexity/noBannedTypes: temp
export const toolToHandler: Record<string, Function> = {
  call_contract: callContractHandler,
  erc20_balance: erc20BalanceHandler,
  erc20_transfer: erc20TransferHandler,
  get_gas_price: getGasPriceHandler,
  get_address: getAddressHandler,
  deploy_property_nft: deployPropertyNFTHandler,
  deploy_property_token: deployPropertyTokenHandler,
  deploy_property_yield_vault: deployPropertyYieldVaultHandler,
  get_native_balance: getNativeBalanceHandler,
};
