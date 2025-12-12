---
title: AWS Practitioner - S3
date: 2025-12-12
author: hexxie
description: AWS Practitioner preparation - week 4
---

I'm currently preparing for the AWS Practitioner exam. 

I'm not completely sure I'll take or pass it, because the Architect exam seems more interesting to me, but I still decided to write down questions and summaries for each section of [Stephane Marek’s AWS Certified Cloud Practitioner course](https://www.udemy.com/course/aws-certified-cloud-practitioner-new/learn/lecture/20118314?start=0#overview).

# How to use it? 
Open the Table of Contents and choose the desired topic. You can try to pass the test, then go to the explanation and review the material.


## S3 Quiz
### S3 Storage Classes, Durability and Availability
<div class="quiz">
  <div class="quiz-question" data-type="single">
    <p>13. A company needs a storage solution for a project wherein the data is accessed less frequently but needs rapid access when required. Which S3 storage class is the MOST cost-effective for the given use-case?</p>
    <label>
      <input type="radio" name="q11" value="a">
      Amazon S3 Glacier (S3 Glacier)
    </label>
    <label>
      <input type="radio" name="q11" value="b">
      Amazon S3 Standard
    </label>
    <label>
      <input type="radio" name="q11" value="c" data-correct="true">
      Amazon S3 Standard-Infrequent Access (S3 Standard-IA)
    </label>
    <label>
      <input type="radio" name="q11" value="d">
      Amazon S3 Intelligent-Tiering (S3 Intelligent-Tiering)
    </label>
    <div class="quiz-explanation">
      <b>Amazon S3 Standard-Infrequent Access (S3 Standard-IA)</b> is for data that is accessed less frequently, but requires rapid access when needed. S3 Standard-IA offers the high durability, high throughput, and low latency of S3 Standard, with a low per GB storage price and per GB retrieval fee. This combination of low cost and high performance make S3 Standard-IA ideal for long-term storage, backups, and as a data store for disaster recovery files.
    </div>
  </div>
  <div class="quiz-question" data-type="single">
    <p>40. Which of the following Amazon S3 storage classes takes the most time to retrieve data (also known as first byte latency)?</p>
    <label>
      <input type="radio" name="q12" value="a" data-correct="true">
      Amazon S3 Glacier Deep Archive
    </label>
    <label>
      <input type="radio" name="q12" value="b">
      Amazon S3 Glacier Flexible Retrieval
    </label>
    <label>
      <input type="radio" name="q12" value="c">
      Amazon S3 Standard
    </label>
    <label>
      <input type="radio" name="q12" value="d">
      Amazon S3 Intelligent-Tiering
    </label>
    <div class="quiz-explanation">
      <b>ArchiveAmazon S3 Glacier Deep Archive</b> is Amazon S3’s lowest-cost storage class and supports long-term retention and digital preservation for data that may be accessed once or twice in a year. It is designed for customers — particularly those in highly-regulated industries, such as the Financial Services, Healthcare, and Public Sectors — that retain data sets for 7-10 years or longer to meet regulatory compliance requirements. Amazon S3 Glacier Deep Archive can also be used for backup and disaster recovery use cases. It has a retrieval time (first byte latency) of 12 to 48 hours.
    </div>
  </div>
  <div class="quiz-question" data-type="single">
    <p>88. A photo sharing web application wants to store thumbnails of user-uploaded images on Amazon Simple Storage Service (Amazon S3). The thumbnails are rarely used but need to be immediately accessible from the web application. The thumbnails can be regenerated easily if they are lost. Which is the most cost-effective way to store these thumbnails on Amazon Simple Storage Service (Amazon S3)?</p>
    <label>
      <input type="radio" name="q13" value="a">
      Use Amazon S3 Standard-Infrequent Access (S3 Standard-IA) to store the thumbnails
    </label>
    <label>
      <input type="radio" name="q13" value="b" data-correct="true">
      Use Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA) to store the thumbnails
    </label>
    <label>
      <input type="radio" name="q13" value="c">
      Use Amazon S3 Standard to store the thumbnails
    </label>
    <label>
      <input type="radio" name="q13" value="d">
      Use Amazon S3 Glacier Flexible Retrieval to store the thumbnails
    </label>
    <div class="quiz-explanation">
      <b>Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)</b> is for data that is accessed less frequently but requires rapid access when needed. Unlike other S3 Storage Classes which store data in a minimum of three Availability Zones (AZs), Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA) stores data in a single Availability Zone (AZ) and costs 20% less than Amazon S3 Standard-Infrequent Access (S3 Standard-IA). Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA) offers the same high durability, high throughput, and low latency of S3 Standard, with a low per GB storage price and per GB retrieval fee. Although Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA) offers less availability than S3 Standard but that's not an issue for the given use-case since the thumbnails can be regenerated easily.As the thumbnails are rarely used but need to be rapidly accessed when required, so Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA) is the best choice for this use-case.
    </div>
  </div>
  <div class="quiz-question" data-type="single">
    <p>149. Which Amazon Simple Storage Service (Amazon S3) storage class offers the lowest availability?</p>
    <label>
      <input type="radio" name="q14" value="a">
      Amazon S3 Standard
    </label>
    <label>
      <input type="radio" name="q14" value="b">
      Amazon S3 Glacier Flexible Retrieval
    </label>
    <label>
      <input type="radio" name="q14" value="c">
      Amazon S3 Intelligent-Tiering
    </label>
    <label>
      <input type="radio" name="q14" value="d" data-correct="true">
      Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)
    </label>
    <div class="quiz-explanation">
      <b>Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)</b> is for data that is accessed less frequently but requires rapid access when needed. Unlike other Amazon S3 Storage Classes which store data in a minimum of three Availability Zones (AZ), Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA) stores data in a single Availability Zone (AZ).
    </div>
  </div>
  <div class="quiz-question" data-type="single">
    <p>179. A medical device company is looking for a durable and cost-effective way of storing their historic data. Due to compliance requirements, the data must be stored for 10 years. Which AWS Storage solution will you suggest?</p>
    <label>
      <input type="radio" name="q15" value="a">
      Amazon S3 Glacier Flexible Retrieval
    </label>
    <label>
      <input type="radio" name="q15" value="b">
      Amazon Elastic File System (Amazon EFS)
    </label>
    <label>
      <input type="radio" name="q15" value="c">
      AWS Storage Gateway
    </label>
    <label>
      <input type="radio" name="q15" value="d" data-correct="true">
      Amazon S3 Glacier Deep Archive
    </label>
    <div class="quiz-explanation">
      <b>Amazon S3 Glacier Deep Archive</b> is Amazon S3’s lowest-cost storage class and supports long-term retention and digital preservation for data that may be accessed once or twice in a year. It is designed for customers — particularly those in highly-regulated industries, such as the Financial Services, Healthcare, and Public Sectors — that retain data sets for 7-10 years or longer to meet regulatory compliance requirements. Amazon S3 Glacier Deep Archive can also be used for backup and disaster recovery use cases. It has a retrieval time (first byte latency) of 12 to 48 hours.
    </div>
  </div>
  <div class="quiz-question" data-type="single">
    <p>187. As a Cloud Practitioner, which Amazon Simple Storage Service (Amazon S3) storage class would you recommend for data archival?</p>
    <label>
      <input type="radio" name="q16" value="a">
      Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)
    </label>
    <label>
      <input type="radio" name="q16" value="b" data-correct="true">
      Amazon S3 Glacier Flexible Retrieval
    </label>
    <label>
      <input type="radio" name="q16" value="c">
      Amazon S3 Intelligent-Tiering
    </label>
    <label>
      <input type="radio" name="q16" value="d">
      Amazon S3 Standard
    </label>
    <div class="quiz-explanation">
      <b>Amazon S3 Glacier Flexible Retrieval (formerly S3 Glacier)</b> is the ideal storage class for archiving data that does not require immediate access but needs the flexibility to retrieve large sets of data at no cost, such as backup or disaster recovery use cases. It is a secure, durable, and extremely low-cost Amazon S3 cloud storage class for data archiving and long-term backup. It is designed to deliver 99.999999999% durability, and provide comprehensive security and compliance capabilities that can help meet even the most stringent regulatory requirements.
    </div>
  </div>
  <div class="quiz-question" data-type="multi">
    <p>252. Which of the following Amazon Simple Storage Service (Amazon S3) storage classes do not charge any data retrieval fee? (Select two)</p>
    <label>
      <input type="checkbox" name="q17" value="a">
      Amazon S3 Standard-Infrequent Access (S3 Standard-IA)
    </label>
    <label>
      <input type="checkbox" name="q17" value="b">
      Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)
    </label>
    <label>
      <input type="checkbox" name="q17" value="c" data-correct="true">
      Amazon S3 Standard
    </label>
    <label>
      <input type="checkbox" name="q17" value="d">
      Amazon S3 Glacier Flexible Retrieval
    </label>
    <label>
      <input type="checkbox" name="q17" value="e" data-correct="true">
      Amazon S3 Intelligent-Tiering
    </label>
    <div class="quiz-explanation">
      <b>Amazon S3 Standard</b> offers high durability, availability, and performance object storage for frequently accessed data. Amazon S3 Standard offers low latency and high throughput performance, It is designed for durability of 99.999999999% of objects across multiple Availability Zones (AZ). Amazon S3 Standard does not charge any data retrieval fee.</br></br> <b>The Amazon S3 Intelligent-Tiering storage class</b> is designed to optimize costs by automatically moving data to the most cost-effective access tier, without performance impact or operational overhead. It works by storing objects in two access tiers: one tier that is optimized for frequent access and another lower-cost tier that is optimized for infrequent access. Amazon S3 Intelligent-Tiering does not charge any data retrieval fee.
    </div>
  </div>
  <div class="quiz-question" data-type="single">
    <p>253. Which of the following Amazon Simple Storage Service (Amazon S3) storage classes has NO constraint of a minimum storage duration charge for objects?</p>
    <label>
      <input type="radio" name="q18" value="a">
      Amazon S3 Standard-Infrequent Access (S3 Standard-IA)
    </label>
    <label>
      <input type="radio" name="q18" value="b">
      Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)
    </label>
    <label>
      <input type="radio" name="q18" value="c" data-correct="true">
      Amazon S3 Standard
    </label>
    <label>
      <input type="radio" name="q18" value="d">
      Amazon S3 Glacier Flexible Retrieval
    </label>
    <div class="quiz-explanation">
      <b>Amazon S3 Standard</b> offers high durability, availability, and performance object storage for frequently accessed data. Amazon S3 Standard offers low latency and high throughput performance, It is designed for durability of 99.999999999% of objects across multiple Availability Zones (AZ). Amazon S3 Standard has no constraint of a minimum storage duration for objects.
    </div>
  </div>
  <button class="quiz-submit" type="button">Open answers</button>
  <p class="quiz-result"></p>
</div>

### S3 Lifecycle, Versioning, Replication, Transfer Acceleration 
<div class="quiz">
  <div class="quiz-question" data-type="single">
    <p>168. Which of the following is the best way to protect your data from accidental deletion on Amazon S3?</p>
    <label>
      <input type="radio" name="q21" value="a">
      Amazon S3 storage classes
    </label>
    <label>
      <input type="radio" name="q21" value="b" data-correct="true">
      Amazon S3 Versioning
    </label>
    <label>
      <input type="radio" name="q21" value="c">
      Amazon S3 Transfer Acceleration (Amazon S3TA)
    </label>
    <label>
      <input type="radio" name="q21" value="d">
      Amazon S3 lifecycle configuration
    </label>
    <div class="quiz-explanation">
      <b>Versioning</b> is a means of keeping multiple variants of an object in the same bucket. You can use versioning to preserve, retrieve, and restore every version of every object stored in your Amazon S3 bucket. With versioning, you can easily recover from both unintended user actions and application failures.Versioning-enabled buckets enable you to recover objects from accidental deletion or overwrite. For example: if you delete an object, instead of removing it permanently, Amazon S3 inserts a delete marker, which becomes the current object version.
    </div>
  </div>
  <button class="quiz-submit" type="button">Open answers</button>
  <p class="quiz-result"></p>
</div>

### S3 Buckets, Objects, Policies and Security 
<div class="quiz">
  <div class="quiz-question" data-type="single">
    <p>198. A financial services company wants to ensure that all customer data uploaded on its data lake on Amazon Simple Storage Service (Amazon S3) always stays private. Which of the following is the MOST efficient solution to address this compliance requirement?</p>
    <label>
      <input type="radio" name="q31" value="a" data-correct="true">
      Use Amazon S3 Block Public Access to ensure that all Amazon S3 resources stay private
    </label>
    <label>
      <input type="radio" name="q31" value="b">
      Set up a high-level advisory committee to review the privacy settings of each object uploaded into Amazon S3
    </label>
    <label>
      <input type="radio" name="q31" value="c">
      Trigger a lambda function every time an object is uploaded on Amazon S3. The lambda function should change the object settings to make sure it stays private
    </label>
    <label>
      <input type="radio" name="q31" value="d">
      Use Amazon CloudWatch to ensure that all Amazon S3 resources stay private
    </label>
    <div class="quiz-explanation">
      <b>Use Amazon S3 Block Public Access</b> to ensure that all Amazon S3 resources stay privateThe Amazon S3 Block Public Access feature provides settings for access points, buckets, and accounts to help you manage public access to Amazon S3 resources. By default, new buckets, access points, and objects don't allow public access. However, users can modify bucket policies, access point policies, or object permissions to allow public access. S3 Block Public Access settings override these policies and permissions so that you can limit public access to these resources.When Amazon S3 receives a request to access a bucket or an object, it determines whether the bucket or the bucket owner's account has a block public access setting applied. If the request was made through an access point, Amazon S3 also checks for block public access settings for the access point. If there is an existing block public access setting that prohibits the requested access, Amazon S3 rejects the request.
    </div>
  </div>
  <button class="quiz-submit" type="button">Open answers</button>
  <p class="quiz-result"></p>
</div>

### S3 Static Website Hosting
<div class="quiz">
  <div class="quiz-question" data-type="single">
    <p>140. An IT company has deployed a static website on Amazon Simple Storage Service (Amazon S3), but the website is still inaccessible. As a Cloud Practioner, which of the following solutions would you suggest to address this issue?</p>
    <label>
      <input type="radio" name="q41" value="a" data-correct="true">
      Fix the Amazon S3 bucket policy
    </label>
    <label>
      <input type="radio" name="q41" value="b">
      Disable Amazon S3 encryption
    </label>
    <label>
      <input type="radio" name="q41" value="c">
      Enable Amazon S3 versioning
    </label>
    <label>
      <input type="radio" name="q41" value="d">
      Enable Amazon S3 replication
    </label>
    <div class="quiz-explanation">
      To host a static website on Amazon S3, you configure an Amazon S3 bucket for website hosting and then upload your website content to the bucket. When you configure a bucket as a static website, you must enable website hosting, set permissions, and create and add an index document.
    </div>
  </div>
  <button class="quiz-submit" type="button">Open answers</button>
  <p class="quiz-result"></p>
</div>

### AWS Snowball, AWS Storage Gateway
<div class="quiz">
  <div class="quiz-question" data-type="single">
    <p>183. Which AWS service will you use if you have to move large volumes of on-premises data to AWS Cloud from a remote location with limited bandwidth?</p>
    <label>
      <input type="radio" name="q51" value="a" data-correct="true">
      AWS Snowball
    </label>
    <label>
      <input type="radio" name="q51" value="b">
      AWS Direct Connect
    </label>
    <label>
      <input type="radio" name="q51" value="c">
      AWS Virtual Private Network (VPN)
    </label>
    <label>
      <input type="radio" name="q51" value="d">
      AWS Transit Gateway
    </label>
    <div class="quiz-explanation">
      AWS Snowball, a part of the AWS Snow Family, is a data migration and edge computing device. If you have large quantities of data you need to migrate into AWS, offline data transfer with AWS Snowball can overcome the challenge of limited bandwidth, and avoid the need to lease additional bandwidth. AWS Snowball moves terabytes of data in about a week. You can use it to move things like databases, backups, archives, healthcare records, analytics datasets, IoT sensor data and media content, especially when network conditions prevent realistic timelines for transferring large amounts of data both into and out of AWS.
    </div>
  </div>
  <button class="quiz-submit" type="button">Open answers</button>
  <p class="quiz-result"></p>
</div>

### S3 Use Cases, General S3 & Supporting Services
<div class="quiz">
  <div class="quiz-question" data-type="multi">
    <p>210. Which of the following statements are true regarding Amazon Simple Storage Service (Amazon S3) (Select two)?</p>
    <label>
      <input type="checkbox" name="q61" value="a">
      You can install databases on Amazon Simple Storage Service (Amazon S3)
    </label>
    <label>
      <input type="checkbox" name="q61" value="b" data-correct="true">
      Amazon Simple Storage Service (Amazon S3) is a key value based object storage service
    </label>
    <label>
      <input type="checkbox" name="q61" value="c" data-correct="true">
      Amazon Simple Storage Service (Amazon S3) stores data in a flat non-hierarchical structure
    </label>
    <label>
      <input type="checkbox" name="q61" value="d">
      Amazon Simple Storage Service (Amazon S3) is a fully managed, elastic file system storage service used as database backup
    </label>
    <label>
      <input type="checkbox" name="q61" value="d">
      Amazon Simple Storage Service (Amazon S3) is a block storage service designed for a broad range of workloads
    </label>
    <div class="quiz-explanation">
      <b>Amazon S3 Standard-Infrequent Access (S3 Standard-IA)</b> is for data that is accessed less frequently, but requires rapid access when needed. S3 Standard-IA offers the high durability, high throughput, and low latency of S3 Standard, with a low per GB storage price and per GB retrieval fee. This combination of low cost and high performance make S3 Standard-IA ideal for long-term storage, backups, and as a data store for disaster recovery files.
    </div>
  </div>
  <button class="quiz-submit" type="button">Open answers</button>
  <p class="quiz-result"></p>
</div>


## Explanations
### S3 Storage Classes, Durability and Availability
### S3 Lifecycle, Versioning, Replication, Transfer Acceleration 
### S3 Buckets, Objects, Policies and Security 
### S3 Static Website Hosting
### AWS Snowball, AWS Storage Gateway
### S3 Use Cases, General S3 & Supporting Services

<script>
document.addEventListener('DOMContentLoaded', function () {
  const quizzes = document.querySelectorAll('.quiz');
  if (!quizzes.length) return;

  quizzes.forEach((quiz) => {
    const submitBtn = quiz.querySelector('.quiz-submit');
    const resultEl = quiz.querySelector('.quiz-result');

    if (!submitBtn) return;

    submitBtn.addEventListener('click', function () {
      let total = 0;
      let correct = 0;

      const questions = quiz.querySelectorAll('.quiz-question');

      questions.forEach((q) => {
        total += 1;
        const options = q.querySelectorAll('input[type="radio"], input[type="checkbox"]');

        const correctSet = new Set(
          Array.from(options)
            .filter((o) => o.dataset.correct === 'true')
            .map((o) => o.value)
        );

        const userSet = new Set(
          Array.from(options)
            .filter((o) => o.checked)
            .map((o) => o.value)
        );

        // reset класів
        q.classList.remove('quiz-correct', 'quiz-wrong');
        options.forEach((o) => {
          o.parentElement.classList.remove('answer-correct', 'answer-wrong', 'answer-missed');
        });

        // підсвічування варіантів
        options.forEach((o) => {
          const val = o.value;
          const isCorrect = correctSet.has(val);
          const isChecked = o.checked;

          if (isCorrect && isChecked) {
            o.parentElement.classList.add('answer-correct');
          } else if (!isCorrect && isChecked) {
            o.parentElement.classList.add('answer-wrong');
          } else if (isCorrect && !isChecked) {
            o.parentElement.classList.add('answer-missed');
          }
        });

        const isQuestionCorrect =
          userSet.size === correctSet.size &&
          Array.from(correctSet).every((v) => userSet.has(v));

        if (isQuestionCorrect) {
          q.classList.add('quiz-correct');
          correct += 1;
        } else {
          q.classList.add('quiz-wrong');
        }

        const explanation = q.querySelector('.quiz-explanation');
        if (explanation) {
          explanation.style.display = 'block';
        }
      });

      if (resultEl) {
        resultEl.textContent = `Результат: ${correct} з ${total}`;
      }
    });
  });
});
</script>

