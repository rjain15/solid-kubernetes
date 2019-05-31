
---
meta:
  - name: introduction
    content: Introduction to the Solid Kubernetes 
  - name: keywords
    content: kubernetes cicd servicemesh monitoring platform servicediscovery logging loadbalancing
---

# Introduction

This guide to take your applications to production on a Kubernetes platform.

[Kubernetes](https://kubernetes.io/docs/home/) is an open source container orchestration engine for automating deployment, scaling, and management of containerized applications. The open source project is hosted by the Cloud Native Computing Foundation (CNCF).

The [CNCF](www.cncf.org) project has close to 20+ projects, including Prometheus, Envoy, Jaegar, Helm etc. 
The kubernetes landscape is changing everyday - new vendors are coming and new projects are incubating.

[Awesome Kubernetes](https://github.com/ramitsurana/awesome-kubernetes) is a curated list of kubernetes sources. In this list there are close to 30 ways to install kubernetes, 10 public/private cloud providers, 50+ associated projects. 

<!-- infinite loop -->
<vue-typed-js :strings="['CI/CD', 'Security', 'Monitoring', 'Testing', 'Secrets managements', 'Load Balancing', 'Ingress Control', 'Logging', 'RBAC', 'TLS' , 'Service Mesh', 'Service Discovery', 'Service Tracing']" :loop="true">
  <h2>I need <span class="typing"></span>on Kubernetes and how do I configure it?</h2>
</vue-typed-js>

As Developer, Architect or Cloud Engineer personas, your challenge is trying to take your apps to production and run them with the same SLO/SLI as before. The guide walks through the various steps you have to either build, configure and deploy on kubernetes to give you a complete production ready application.

## Motivation

We started on the kubernetes journey with few big customers - Finance/Mortgage, Food and Retail industries. And we were tasked with the same challenge, build a platform and move apps used by 100s of customers today to production, without disruption.

## Goals

We have few goals different from any other kubernetes blogs, awesome lists or documentation.

  1. Cut the noise
  2. Focus on path to production
  3. Incrementally learn and
  4. Always keep this path fresh

This is a vendor neutral guide, so how you implement these concerns on you path, will vary. If you follow this,you will reach to production.

## Join Us

[Solid Kubernetes](https://github.com/rjain15/solid-kubernetes/) a public repo, with contributions from platform developers. Please consider sharing your experiences by [creating a pull request](https://github.com/rjain15/solid-kubernetes/pulls).

If you have any ideas for steps you'd like to see then [raise as an issue](https://github.com/rjain15/solid-kubernetes/issues/new) labelled **enhancement**

[![Netlify Status](https://api.netlify.com/api/v1/badges/b8b4b21a-37c7-49a5-b20f-711bf3930639/deploy-status)](https://app.netlify.com/sites/confident-lalande-e0b863/deploys)

<Advert/>