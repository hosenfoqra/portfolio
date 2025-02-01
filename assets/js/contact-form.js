// jQuery(document).ready(function ($) {
//     // Initialize form validation
//     $("form#contactpage").validate({
//         // submitHandler: function (form) {
//         //     // Formspree will handle the form submission automatically
//         //     // You can add any custom actions here if needed (like showing a loading spinner)
//         //     console.log("Validation passed, form will be submitted to Formspree");
//         // },
//         submitHandler: function (form) {
//             console.log("Validation passed, form will be submitted to Formspree");
//             form.submit(); // Explicitly submit the form
//         },
        
//         rules: {
//             name: {
//                 required: true
//             },
//             phone: {
//                 required: true
//             },
//             emailHelp: {
//                 required: true,
//                 email: true
//             },
//         },
//         errorElement: "span",
//         errorPlacement: function (error, element) {
//             error.appendTo(element.parent());
//         }
//     });
// });


// jQuery(document).ready(function ($) {
//     // Initialize form validation
//     $("form#contactpage").validate({
//         submitHandler: function (form) {
//             console.log("Validation passed, submitting the form via AJAX");

//             // Gather form data
//             const formData = $(form).serialize();

//             // Submit form via AJAX
//             $.ajax({
//                 url: "https://formspree.io/f/mlddkolv", // Formspree endpoint
//                 method: "POST",
//                 data: formData,
//                 dataType: "json",
//                 success: function () {
//                     // Show success message
//                     alert("Thank you! Your message has been sent.");
                    
//                     // Optionally, reset the form
//                     form.reset();
//                 },
//                 error: function (xhr, status, error) {
//                     console.error("Error:", error);
//                     alert("Oops! Something went wrong. Please try again.");
//                 }
//             });
//         },
//         rules: {
//             name: {
//                 required: true
//             },
//             phone: {
//                 required: true
//             },
//             emailHelp: {
//                 required: true,
//                 email: true
//             },
//         },
//         errorElement: "span",
//         errorPlacement: function (error, element) {
//             error.insertAfter(element);
//         }
//     });
// });



jQuery(document).ready(function ($) {
    // Initialize form validation
    $("form#contactpage").validate({
        submitHandler: function (form) {
            console.log("Validation passed, submitting the form via AJAX");

            // Gather form data
            const formData = $(form).serialize();

            // Submit form via AJAX
            $.ajax({
                url: "https://formspree.io/f/mlddkolv", // Formspree endpoint
                method: "POST",
                data: formData,
                dataType: "json",
                success: function () {
                    // Show the modal upon successful submission
                    $("#successModal").modal('show');

                    // Optionally, reset the form
                    form.reset();
                },
                error: function (xhr, status, error) {
                    console.error("Error:", error);
                    alert("Oops! Something went wrong. Please try again.");
                }
            });
        },
        rules: {
            name: {
                required: true
            },
            phone: {
                required: true
            },
            emailHelp: {
                required: true,
                email: true
            },
        },
        errorElement: "span",
        errorPlacement: function (error, element) {
            error.insertAfter(element);
        }
    });
});
