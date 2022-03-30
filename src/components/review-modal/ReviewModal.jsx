import { Formik } from "formik";
import * as yup from 'yup'
import classNames from 'classnames';
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { sendReview } from "../../redux/rewiew/reviewActions";
import { getReviewLoading, getReviewError } from "../../redux/rewiew/reviewSelectors";
import { LoaderButtons } from "../loader-buttons/LoaderButtons";

import './review-modal.scss'


export const ReviewModal = ({ showReviewForm, handleCloseForm, id }) => {
    const loading = useSelector(getReviewLoading)
    const error = useSelector(getReviewError)
    const dispatch = useDispatch()

    let raiting = 1;
    const validationsSchema = yup.object().shape({
        name: yup.string().trim().required('Enter your name'),
        comment: yup.string().trim().required('Enter your comment'),
    })

    const submit = (values, { setSubmitting }) => {
        const review = {
            id: id,
            name: values.name,
            comment: values.comment,
            ratingForm: raiting
        }
        dispatch(sendReview(review))
        setSubmitting(false)
    }

    const ratingChanged = (newRating) => {
        raiting = newRating;
    };


    return (
        <>
            <div className={classNames('overlay_review', { active: showReviewForm })}
                onClick={handleCloseForm}
            >
            </div>
            <Formik
                initialValues={{
                    name: '',
                    comment: '',
                    ratingForm: '1',
                }}
                validateOnMount
                onSubmit={submit}
                validationSchema={validationsSchema}
            >
                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) =>
                (
                    <>
                        <div className={classNames('form_review_wrap', { active: showReviewForm })} data-test-id="review-modal">
                            <form className="form_review">
                                <span className="header_form">Write a review</span>
                                <ReactStars
                                    count={5}
                                    value={1}
                                    onChange={ratingChanged}
                                    size={24}
                                    activeColor="#ffd700"
                                />,
                                <div className="wrapper">
                                    <input
                                        data-test-id="review-name-field"
                                        type='text'
                                        name="name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                        placeholder="Ваше имя"
                                    />
                                    {touched.name && errors.name && <span className="error">{errors.name}</span>}
                                </div>
                                <div className="wrapper">
                                    <textarea
                                        data-test-id="review-text-field"
                                        name="comment"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.comment}
                                        placeholder="Комментарий"
                                    />
                                    {touched.comment && errors.comment && <span className="error">{errors.comment}</span>}
                                </div>

                                <button
                                    data-test-id="review-submit-button"
                                    type="submit"
                                    disabled={!isValid ? true : loading ? true : false}
                                    onClick={handleSubmit}
                                >
                                    {loading && <LoaderButtons />}
                                    Send
                                </button>
                                {error && <span className="error">Ошибка</span>}
                            </form>
                        </div>
                    </>
                )}
            </Formik>
        </>
    )
}