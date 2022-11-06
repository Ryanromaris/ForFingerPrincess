import { useForm, SubmitHandler } from 'react-hook-form';
import Layout from 'src/components/layout/Layout';
import { useFormik } from 'formik';

type Inputs = {
	example: string;
	exampleRequired: string;
	gender: string;
};

const MyPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isDirty, dirtyFields },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

	const formik = useFormik({
		initialValues: { email: '' },
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	console.log('Test rerendering');

	console.log('dirtyFields', dirtyFields);

	console.log('isDirty', isDirty);

	return (
		<Layout hasLogoBar={false}>
			<div className="article_container">MyPage</div>

			<form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex' }}>
				<input defaultValue="test" {...register('example')} />
				<input {...register('exampleRequired', { required: true })} />
				{errors.exampleRequired && <span>This field is required</span>}
				<select {...register('gender')}>
					<option value="female">female</option>
					<option value="male">male</option>
					<option value="other">other</option>
				</select>

				<input type="submit" />
			</form>

			<form onSubmit={formik.handleSubmit}>
				<label htmlFor="email">Email Address</label>
				<input
					id="email"
					name="email"
					type="email"
					onChange={formik.handleChange}
					value={formik.values.email}
				/>
				<button type="submit">Submit</button>
			</form>
		</Layout>
	);
};

export default MyPage;
