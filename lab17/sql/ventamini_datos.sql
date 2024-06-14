-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-05-2024 a las 07:15:41
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ventamini`
--

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`IDcategoria`, `nombre`, `created_at`) VALUES
(1, 'música', '2024-05-30 23:12:31'),
(2, 'libros', '2024-05-30 23:12:31'),
(3, 'revistas', '2024-05-30 23:12:31'),
(4, 'películas', '2024-05-30 23:12:31');

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`IDproducto`, `IDcategoria`, `nombre`, `descripcion`, `precio`, `imagen`, `created_at`) VALUES
(1, 1, 'El Mejor Album De Voces Del Mundo 2 Cds Emi Music', NULL, 50, 'https://http2.mlstatic.com/D_NQ_NP_984341-MLM71436271288_092023-O.webp', '2024-05-30 23:22:00'),
(2, 2, 'Nostalgia De La Muerte Xavier Villaurrutia', NULL, 50, 'https://http2.mlstatic.com/D_NQ_NP_621311-MLM48838864822_012022-O.webp ', '2024-05-30 23:22:00');

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`usuario`, `correo`, `contrasena`, `sesion`, `created_at`) VALUES
('ventAdmin0', 'jefichulo@gmail.com', ',sqlSQL248,', 0, '2024-05-30 21:50:31');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
