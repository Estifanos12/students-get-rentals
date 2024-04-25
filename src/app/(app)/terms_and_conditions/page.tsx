import Link from "next/link";
import { FaLink } from "react-icons/fa";

export default function TermsAndConditions() {
  return (
    <div className="lg:max-w-7xl mx-auto pb-12 pt-4 px-2 text-foreground flex flex-col md:flex-row gap-5 md:gap-10 lg:py-14 h-full">
      <nav className="md:flex-[1] h-fit bg-light dark:bg-gray-800 p-6 rounded-lg md:sticky md:top-6">
        <h2 className="text-lg font-semibold mb-4">Table of contents</h2>
        <ol className="flex flex-col gap-2.5 hover:[&>li>a]:text-primary hover:[&>li>a]:underline list">
          <li>
            <Link href={"/terms_and_conditions#acceptance_of_agreement"}>
              Acceptance of Agreement
            </Link>
          </li>
          <li>
            <Link href={"/terms_and_conditions#services_offered"}>
              Services Offered
            </Link>
          </li>
          <li>
            <Link href={"/terms_and_conditions#user_obligations"}>
              User Obligations
            </Link>
          </li>
          <li>
            <Link href={"/terms_and_conditions#payment"}>Payment</Link>
          </li>
          <li>
            <Link href={"/terms_and_conditions#cancellation_and_refund"}>
              Cancellations and Refunds
            </Link>
          </li>
          <li>
            <Link href={"/terms_and_conditions#user_conduct"}>
              User Conduct
            </Link>
          </li>
          <li>
            <Link href={"/terms_and_conditions#intellectual_property"}>
              Intellectual Property
            </Link>
          </li>
          <li>
            <Link href={"/terms_and_conditions#limitation_of_liability"}>
              Limitation of Liability
            </Link>
          </li>
          <li>
            <Link href={"/terms_and_conditions#indemnification"}>
              Indemnification
            </Link>
          </li>
          <li>
            <Link href={"/terms_and_conditions#modifications_of_agreements"}>
              Modifications of Agreements
            </Link>
          </li>
          <li>
            <Link href={"/terms_and_conditions#governing_law"}>
              Governing Law
            </Link>
          </li>
          <li>
            <Link href={"/terms_and_conditions#contact_information"}>
              Contact Information
            </Link>
          </li>
        </ol>
      </nav>

      <div className="md:flex-[3] ">
        <h1 className="text-2xl font-bold mb-3">Terms and Conditions</h1>
        <p>Website User Agreement for StudentsGetRentals.com</p>
        <p>Effective Date: March 23, 2024</p>

        <p className="my-4">
          Welcome to StudentsGetRentals.com, a platform designed for renters to
          increase their knowledge of houses maintenance and social neighbour
          interacts. By using our website, located at{" "}
          <Link
            href={"https://StudentsGetRentals.com"}
            className="underline hover:text-primary focus:text-primary"
          >
            Student Get Rentals
          </Link>
          , you agree to comply with and be bound by the following terms and
          conditions of use. Please review the following terms carefully.
        </p>

        <div className="mt-10">
          <section id="acceptance_of_agreement" className="my-8">
            <h3 className="text-xl mb-2 flex items-center gap-2 ">
              <Link
                href={"/terms_and_conditions#acceptance_of_agreement"}
                className="hover:text-primary focus:text-priamry  [&:hover+svg]:visible"
              >
                1. Acceptance of Agreement
              </Link>
              <FaLink className="text-primary invisible" size={15} />
            </h3>
            <p>
              This Agreement is between you, the user, and
              StudentsGetRentals.com , the owner and operator of
              www.studentsGetRentals.com. This Agreement sets forth the general
              terms and conditions of your use of the website and the services
              offered by StudentsGetRentals.com.
            </p>
          </section>
          <div id="services_offered" className="my-8">
            <h3 className="text-xl mb-2 flex items-center gap-2 ">
              <Link
                href={"/terms_and_conditions#services_offered"}
                className="hover:text-primary focus:text-priamry [&:hover+svg]:visible"
              >
                2. Services Offered
              </Link>
              <FaLink className="text-primary invisible" size={15} />
            </h3>
            <p>
              StudentsGetRentals.com provides a platform for renters to learn
              about house maintenance information, how to live in peace with
              neighbours, and how to find other roommates who are looking to
              rent a house.
            </p>
          </div>
          <div id="user_obligations" className="my-8">
            <h3 className="text-xl mb-2 flex items-center gap-2 ">
              <Link
                href={"/terms_and_conditions#user_obligations"}
                className="hover:text-primary focus:text-priamry  [&:hover+svg]:visible"
              >
                3. User Obligations
              </Link>
              <FaLink className="text-primary invisible" size={15} />
            </h3>
            <p>
              Renters must ensure they are the one’s completing the courses .
              Also if they are looking for other roomamates to rent a house,
              must ensure that their listings are accurate, do not infringe upon
              the rights of others.
            </p>
          </div>
          <div id="payment" className="my-8">
            <h3 className="text-xl mb-2 flex items-center gap-2  ">
              <Link
                href={"/terms_and_conditions#payment"}
                className="hover:text-primary focus:text-priamry [&:hover+svg]:visible"
              >
                4. Payment
              </Link>
              <FaLink className="text-primary invisible" size={15} />
            </h3>
            <p>
              StudentsGetRentals.com processes payments through a third-party
              payment processor. By using this service, you agree to their terms
              and conditions.
            </p>
          </div>
          <div id="cancellation_and_refund" className="my-8">
            <h3 className="text-xl mb-2 flex items-center gap-2 ">
              <Link
                href={"/terms_and_conditions#cancellation_and_refund"}
                className="hover:text-primary focus:text-priamry  [&:hover+svg]:visible"
              >
                5. Cancellations and Refunds
              </Link>
              <FaLink className="text-primary invisible" size={15} />
            </h3>
            <p>
              Cancellation and refund policies are set by the Hosts.
              StudentsGetRentals.com is not responsible for issuing refunds
              outside of these policies.
            </p>
          </div>
          <div id="user_conduct" className="my-8">
            <h3 className="text-xl mb-2 flex items-center gap-2 ">
              <Link
                href={"/terms_and_conditions#user_conduct"}
                className="hover:text-primary focus:text-priamry  [&:hover+svg]:visible"
              >
                6. User Conduct
              </Link>
              <FaLink className="text-primary invisible" size={15} />
            </h3>
            <p>
              Users agree not to use the website for any unlawful purpose, to
              infringe on the rights of others, or to interfere with the
              operation of the website.
            </p>
          </div>
          <div id="intellectual_property" className="my-8">
            <h3 className="text-xl mb-2 flex items-center gap-2  ">
              <Link
                href={"/terms_and_conditions#intellectual_property"}
                className="hover:text-primary focus:text-priamry [&:hover+svg]:visible"
              >
                7. Intellectual Property
              </Link>
              <FaLink className="text-primary invisible" size={15} />
            </h3>
            <p>
              Content provided by StudentsGetRentals.com, including text,
              graphics, logos, and images, is the property of
              StudentsGetRentals.com and is protected by copyright and
              intellectual property laws.
            </p>
          </div>
          <div id="limitation_of_liability" className="my-8">
            <h3 className="text-xl mb-2 flex items-center gap-2 ">
              <Link
                href={"/terms_and_conditions#limitation_of_liability"}
                className="hover:text-primary focus:text-priamry  [&:hover+svg]:visible"
              >
                8. Limitation of Liability
              </Link>
              <FaLink className="text-primary invisible" size={15} />
            </h3>
            <p>
              StudentsGetRentals.com will not be liable for any damages arising
              out of your use of the website or the services provided.
            </p>
          </div>
          <div id="indemnification" className="my-8">
            <h3 className="text-xl mb-2 flex items-center gap-2 ">
              <Link
                href={"/terms_and_conditions#indemnification"}
                className="hover:text-primary focus:text-priamry  [&:hover+svg]:visible"
              >
                9. Indemnification
              </Link>
              <FaLink className="text-primary invisible" size={15} />
            </h3>
            <p>
              You agree to indemnify and hold harmless StudentsGetRentals.com
              and its employees, from any claim or demand made by any third
              party due to your use of the website.
            </p>
          </div>
          <div id="modifications_of_agreements" className="my-8">
            <h3 className="text-xl mb-2 flex items-center gap-2  ">
              <Link
                href={"/terms_and_conditions#modifications_of_agreements"}
                className="hover:text-primary focus:text-priamry [&:hover+svg]:visible"
              >
                10. Modifications of Agreements
              </Link>
              <FaLink className="text-primary invisible" size={15} />
            </h3>
            <p>
              StudentsGetRentals.com reserves the right to modify this Agreement
              at any time. Your continued use of the website after such
              modifications will constitute acknowledgment and agreement of the
              modified terms.
            </p>
          </div>
          <div id="governing_law" className="my-8">
            <h3 className="text-xl mb-2 flex items-center gap-2  ">
              <Link
                href={"/terms_and_conditions#governing_law"}
                className="hover:text-primary focus:text-priamry [&:hover+svg]:visible"
              >
                11. Governing Law
              </Link>
              <FaLink className="text-primary invisible" size={15} />
            </h3>
            <p>This Agreement shall be governed by the laws of Jurisdiction.</p>
          </div>
          <div id="contact_information" className="my-8">
            <h3 className="text-xl mb-2 flex items-center gap-2  ">
              <Link
                href={"/terms_and_conditions#contact_information"}
                className="hover:text-primary focus:text-priamry [&:hover+svg]:visible"
              >
                12. Contact Information
              </Link>
              <FaLink className="text-primary invisible" size={15} />
            </h3>
            <p>
              For any questions or concerns regarding this Agreement, please
              contact us at info@StudentsGetRentals.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
