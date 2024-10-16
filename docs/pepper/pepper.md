<a name="Overview"></a>
Overview
=====

*   [Overview](#Overview)
*   [About](#About)
*   [Prerequisites](#Prerequisites)
*   [Usage](#Usage)
    *   [AWS](#AWS)
    *   [Azure](#Azure)
    *   [GCLOUD](#GCLOUD)


Pepper
======


<a name="About"></a>
About
-----

Pepper quickly deploys kubernetes and real-world sample applications on your choice of cloud.  
Pepper shows every step along with the exact command it runs on your behalf.  
You’ll get a useful kubernetes installation very quickly while seeing how to do it yourself.

<a name="Prerequisites"></a>
Prerequisites
-------------

You’ll need the ability to use the cloud shell of your chosen cloud provider or be able to connect with a local terminal.

<a name="Usage"></a>
Usage
-----

Run:

Terminal window

    curl https://raw.githubusercontent.com/dtdave/scw/refs/heads/Main/pepper/pepper.ps1 -s > ~/pepper.ps1 && pwsh ~/pepper.ps1 -c

Supported options:

*   `-c` Show cloud commands. Command history logged to **pepper.ps1.log** file for reference.
*   `-v` Show trivial/verbose commands. Chatty, but good feedback when modifying Pepper.
*   `-h` Shows all options.

<a name="AWS"></a>
### AWS

*   You’ll need access to an AWS region where you are able to create an EKS clusters.
*   If using your terminal to connect you’ll need an IAM token and secret.

<a name="Azure"></a>
### Azure

*   You will need to be able to create a resource group and an AKS cluster.

<a name="GCLOUD"></a>
### GCLOUD

*   You will need access to an account with an existing project.
*   You’ll need the ability to create a GKE cluster within that project.
*   If you are using your local terminal on Windows or Mac, you’ll need to install this plugin as administrator:

Terminal window

    gcloud components install gke-gcloud-auth-plugin