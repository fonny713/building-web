import Link from 'next/link'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'
import { Building2, Phone } from 'lucide-react'
import { ContactButton } from './contact-button'
import { AboutNavLink } from './about-nav-link'

const mainNavItems = [
	{
		title: 'Usługi',
		items: [
			{
				title: 'Budownictwo',
				description: 'Rozwiązania budowlane dla klientów indywidualnych, komercyjnych i przemysłowych',
				href: '/services/construction',
				icon: Building2,
			},
			{
				title: 'Zarządzanie Projektami',
				description: 'Profesjonalne planowanie i realizacja projektów',
				href: '/services/project-management',
				icon: Building2,
			},
			{
				title: 'Remonty',
				description: 'Kompleksowe usługi remontowe i modernizacyjne',
				href: '/services/renovation',
				icon: Building2,
			},
		],
	},
	{
		title: 'Materiały',
		href: '/materials',
	},
	{
		title: 'Portfolio',
		href: '/portfolio',
	},
	{
		title: 'O nas',
		href: '#o-nas',
	},
]

export function MainNav() {
	return (
		<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-16 items-center">
				<Link href="/" className="mr-8 flex items-center space-x-2">
					<span className="text-gradient font-bold text-xl">BuildWell Solutions</span>
				</Link>
				<NavigationMenu className="hidden md:flex">
					<NavigationMenuList className="gap-2">
						{mainNavItems.map((item) => (
							<NavigationMenuItem key={item.title}>
								{item.items ? (
									<>
										<NavigationMenuTrigger className="h-9 px-4">{item.title}</NavigationMenuTrigger>
										<NavigationMenuContent>
											<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
												{item.items.map((subItem) => (
													<li key={subItem.title}>
														<NavigationMenuLink asChild>
															<Link
																href={subItem.href}
																className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
															>
																<div className="flex items-center gap-2 text-sm font-medium leading-none">
																	{subItem.icon && <subItem.icon className="h-4 w-4" />}
																	{subItem.title}
																</div>
																<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
																	{subItem.description}
																</p>
															</Link>
														</NavigationMenuLink>
													</li>
												))}
											</ul>
										</NavigationMenuContent>
									</>
								) : item.title === 'O nas' ? (
									<AboutNavLink />
								) : (
									<NavigationMenuLink asChild>
										<Link
											href={item.href}
											className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
										>
											{item.title}
										</Link>
									</NavigationMenuLink>
								)}
							</NavigationMenuItem>
						))}
					</NavigationMenuList>
				</NavigationMenu>
				<div className="ml-auto flex items-center gap-4">
					<Button asChild variant="ghost" size="sm" className="hidden md:flex">
						<Link href="tel:+1234567890" className="flex items-center gap-2">
							<Phone className="h-4 w-4" />
							<span>+1 234 567 890</span>
						</Link>
					</Button>
					<ContactButton />
				</div>
			</div>
		</header>
	)
}
