import jwt from "jsonwebtoken"

export const protection = async (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Authentication failed" })
    }

    const token = authHeader.split(" ")[1]

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_TOKEN)

        req.user = decoded
        next()  // 🔥 very important
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token" })
    }
}
