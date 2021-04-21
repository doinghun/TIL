---
slug: "api-security"
title: "API Security"
main_category: Infra
category: 1. DevOps
status: ✅ Completed
---

Goal

- Allow applications to access data from 3rd party apps without the users sharing their password

<br />

### OAuth

-

### OpenID Connect

#### Terms & Definitions

- **Identity**: Unique name of person or device

- **Authentication**: Process of verifying identity _(Identifying Users)_

- **Authorization**: Function over identity assigning access rights. Grant access based on a set of rules, where the rules depend on identity _(Accessing APIs)_

- **Access rights**: privileges for accessing data or calling functionality

<br />

OIDC vs SAML

*SAML* requires the Identity Provider (IDP) and the Service Provider (SP), to know each other before hand, **pre-configured**, **static** authentication and authorization. OpenId (+Connect) doesn't have such a requirement.

This is important for IDPs that want full control over who's accessing the data. Part of the standard is to configure what is provided to specific SPs.

For example, a bank might not want its users to access any services except some predefined ones (because of regulations or other strict security rules).

This doesn't mean that an OpenId IDP, cannot enforce such a restriction. An OpenID implementer can control access, but that's not the purpose of OpenID.

Other than the predefined, strict, static, access control difference, conceptually (not technically), [OpenID Connect](https://en.wikipedia.org/wiki/OpenID_Connect) and [SAML](https://en.wikipedia.org/wiki/SAML_2.0) are similar.

Bottom line, if you're an SP, you should support what your customers require:

1. If your customer is an individual end user customers (using their google id for example), forget about SAML. Use OpenID Connect.

1. If your customer is a bank that wants its employees to use your service and export only static list of data it will provide to your service, the bank will probably want you to support SAML. The bank might have an OpenID implementation with client restriction.

#### References

- [https://www.redhat.com/en/topics/security/api-security](https://www.redhat.com/en/topics/security/api-security)
