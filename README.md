# SSM-Core

SSM-Core allows to abstract the complexity related to the management of CRM Siebel components. Behind the scenes, the process is performed using the Siebel Server Manager binaries, but at the highest level this orchestration is transparent, thus allowing the user to have a friendly experience.

## Install

Via git:

```
git clone https://github.com/fabiojaniolima/ssm-core.git
```

Access the directory and install the dependencies. To do this, run:
```
yarn
```

> You are free to use NPM instead of YARN if you prefer.

## Examples

To list all server components:

```
const app = require('./index')

async function main() {
  try {
    const result = await app(
      'path\to\binary', //example C:\\ServerManager\\version\\bin\\srvrmgr.exe
      'gateway',
      'enterprise',
      'username',
      'password',
      { action: 'list component', server: 'xpto' }
    )
    console.log(result)
  } catch (err) {
    console.log(err)
  }
}

main()
```

For a specific component:

```
const app = require('./index')

async function main() {
  try {
    const result = await app(
      'path\to\binary', //example C:\\ServerManager\\version\\bin\\srvrmgr.exe
      'gateway',
      'enterprise',
      'username',
      'password',
      { action: 'list component', server: 'xpto', components: ['compAlias'] }
    )
    console.log(result)
  } catch (err) {
    console.log(err)
  }
}

main()
```

### Output example

Example generated by a list command:

```
{
  success: true,
  content: [
    {
      SV_NAME: 'SERVER_01A',
      CC_ALIAS: 'Process01',
      CC_NAME: 'Assignment Xpto',
      CT_ALIAS: 'Process01',
      CG_ALIAS: 'AsgnXpto',
      CC_RUNMODE: 'Batch',
      CP_DISP_RUN_STATE: 'Fax',
      CP_NUM_RUN_: '0',
      CP_MAX_TASK: '300',
      CP_ACTV_MTS: '0',
      CP_MAX_MTS_: '1',
      CP_START_TIME: '2019-12-02 00:00:00',
      CP_END_TIME: '',
      CC_INCARN_NO: '',
      CC_DESC_TEXT: ''
    },
    {
      SV_NAME: 'SERVER_01A',
      CC_ALIAS: 'AsgnBatch',
      CC_NAME: 'Batch Assignment',
      CT_ALIAS: 'AsgnBatch',
      CG_ALIAS: 'AsgnXpto',
      CC_RUNMODE: 'Batch',
      CP_DISP_RUN_STATE: 'Ativado',
      CP_NUM_RUN_: '0',
      CP_MAX_TASK: '300',
      CP_ACTV_MTS: '',
      CP_MAX_MTS_: '',
      CP_START_TIME: '2019-12-02 00:00:00',
      CP_END_TIME: '',
      CC_INCARN_NO: '',
      CC_DESC_TEXT: ''
    },
    {
      SV_NAME: 'SERVER_01A',
      CC_ALIAS: 'BusIntMgr',
      CC_NAME: 'Business Integration Batch Manager',
      CT_ALIAS: 'BusMgr',
      CG_ALIAS: 'EAI',
      CC_RUNMODE: 'Batch',
      CP_DISP_RUN_STATE: 'Ativado',
      CP_NUM_RUN_: '0',
      CP_MAX_TASK: '300',
      CP_ACTV_MTS: '1',
      CP_MAX_MTS_: '1',
      CP_START_TIME: '2019-12-02 00:00:00',
      CP_END_TIME: '',
      CC_INCARN_NO: '',
      CC_DESC_TEXT: ''
    }
```

An example of Server Manager internal failure output:

```
{
  success: false,
  content: 'Error 1 encountered. Exiting the script program'
}
```

## License

The license of the project is the [MIT](https://github.com/fabiojaniolima/ssm-core/blob/master/LICENSE) license.
