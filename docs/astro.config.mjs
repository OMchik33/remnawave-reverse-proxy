// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightHeadingBadges from 'starlight-heading-badges';
import starlightScrollToTop from 'starlight-scroll-to-top';
import starlightCoolerCredit from 'starlight-cooler-credit'; // This plugin is not used in the current configuration, but supposed to shown on Contribution guide page

// https://astro.build/config
export default defineConfig({
	site: 'https://wiki.egam.es',
	integrations: [
		starlight({
			plugins: [
				starlightHeadingBadges(),
				starlightScrollToTop({
					showTooltip: false,
					borderRadius: '25',
				}),
			],
			title: 'eGamesAPI',
			logo: {
				src: './src/assets/logo.png',
			},
			customCss: [
				'./src/styles/custom.css',
			],
			defaultLocale: 'root', // https://starlight.astro.build/guides/i18n/
			locales: {
				root: {
					label: 'English',
					lang: 'en', // lang is required for the root locales
				},
				'ru': {
					label: 'Русский',
					lang: 'ru',
				},
			},
			editLink: {
				baseUrl: "https://github.com/eGamesAPI/remnawave-reverse-proxy/edit/main/docs/",
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/eGamesAPI/remnawave-reverse-proxy/' },
				{ icon: 'telegram', label: 'Telegram', href: 'https://t.me/remnawave_reverse' },
				{ icon: 'seti:folder', label: 'Used resources', href: '../../contribution/resources' }
			],
			sidebar: [
				{
					label: 'Introduction', translations: { ru: 'Введение' },
					items: [
						{ label: 'Overview', slug: 'introduction/overview', translations: { ru: 'Обзор' } },
					],
				},
				{
					label: 'Installation', translations: { ru: 'Установка' },
					items: [
						{ label: 'Requirements', slug: 'installation/requirements', translations: { ru: 'Обязательные условия' } },
						{ label: 'Panel and node', slug: 'installation/panel-and-node', translations: { ru: 'Панель и нода' }, badge: {text: 'WIP', variant: 'caution'} },
						{ label: 'Panel only', slug: 'installation/panel-only', translations: { ru: 'Только панель' }, badge: {text: 'WIP', variant: 'caution'} },
						{ label: 'Node only', slug: 'installation/node-only', translations: { ru: 'Только нода' }, badge: {text: 'WIP', variant: 'caution'} },
					],
				},
				{
					label: 'Configuration', translations: { ru: 'Настройка' },
					items: [
						{ label: 'Access to Prometheus metrics', slug: 'configuration/prometheus-metrics', translations: { ru: 'Доступ к Prometheus метркам' }, badge: {text: 'New', variant: 'default'} },
						{ label: 'External access to API', slug: 'configuration/external-api', translations: { ru: 'Внешний доступ к API' }, badge: {text: 'New', variant: 'default'} },
						{ label: 'Monitoring with Grafana', slug: 'configuration/grafana-monitoring', translations: { ru: 'Мониторинг через Grafana' }, badge: {text: 'New', variant: 'default'} },
					],
				},
				{
					label: 'Troubleshooting', translations: { ru: 'Устранение неполадок' },
					items: [
						{ label: 'Common issues', slug: 'troubleshooting/common-issues', translations: { ru: 'Частые проблемы' }, badge: {text: 'WIP', variant: 'caution'} },
						// { label: 'Logs', slug: 'troubleshooting/logs', translations: { ru: 'Логи' } },
					],
				},
				{
					label: 'Contribution', translations: { ru: 'Помощь в разработке' },
					items: [
						{ label: 'Contributors', slug: 'contribution/contributors', translations: { ru: 'Участники разработки' } },
						{ label: 'Contribution Guide', slug: 'contribution/guide', translations: { ru: 'Руководство по внесению изменений' }, badge: {text: 'New', variant: 'default'} },
					],
				},
			],
		}),
	],
});



// TODO:
// 1. complete all pages marked as WIP
// 2. add more content to the "Common Issues" page
// 3. make the design of welcome page more comfortable? reference: https://pls.cli.rs/
// 4. add repository stars at the right top corner of the page