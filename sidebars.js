/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{ type: "autogenerated", dirName: "k8s" }],
  AcceleratorSidebar: [
    {
      type: "category",
      label: "Accelerator: Azure",
      items: [
        { type: "doc", id: "accelerators/index" },
        { type: "doc", id: "accelerators/azure", label: "1- Setup Azure VM" },
        { type: "doc", id: "k8s/Kubernetes/k3s", label: "2- Install k3s" },
      ],
    },
  ],
};

module.exports = sidebars;
