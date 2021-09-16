---
slug: "aws-iam"
title: "AWS IAM"
main_category: DevOps
category: 2. Cloud
status: ✅ Completed
last_edited_time: 2021-09-16
---

### What is MFA

- Multi Factor Authentication

- To protect Root accounts and IAM users

- MFA = password you know + security device you won

<br />

#### MFA in AWS

- Virtual MFA device

  - Google Authenticator (phone only)

  - Authy (multi-device

- Physical device

  - Yubikey

- Hardware Key Fob

<br />

#### Access Keys, CLI & SDK

- Access Key

  - Access Key ID ~= username

  - Secret Access Key ~= password

   <br />

#### IAM Security Tools

- IAM Credentials Report (account-level)

- IAM Access Advisor (user-level)

<br />

#### IAM Best Practices

- Don't use root account for most activity

- One physical user = One AWS user

- Assign users to groups & assign permissions to groups

- Create strong PW policy

- User & enforce the use of MFA

- Create & use Roles for giving permissions to AWS Services

- User Access Keys for Programmatic Access (CLI / SDK)

- Audit permissions with IAM Credential Report

- No sharing of IAM users & Access keys

<br />

#### IAM Summary

- Users

- Groups

- Policies

- Roles

- Security

- Access Keys

- Audit
