const admin = require('firebase-admin');

async function signUp(formData) {
    const db = admin.database();
    if (!formData.email || !formData.password) {
        throw new Error('Email and password are required');
    }

    try {
        // 새로운 사용자 생성
        const userRecord = await admin.auth().createUser({
            email: formData.email,
            password: formData.password,
        });

        // 사용자 UID 기반 기본 회원 정보 저장
        const ref = db.ref('users').child(userRecord.uid);
        await ref.set({
            email: formData.email,
            name: formData.username,
        });
        console.log(userRecord.uid);

        return { uid: userRecord.uid, email: formData.email, status: 'success' };
    } catch (error) {
        throw error;
    }
}

module.exports = { signUp };
