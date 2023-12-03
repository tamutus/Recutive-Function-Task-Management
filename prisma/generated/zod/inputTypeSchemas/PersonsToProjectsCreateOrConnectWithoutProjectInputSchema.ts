import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToProjectsWhereUniqueInputSchema } from './PersonsToProjectsWhereUniqueInputSchema';
import { PersonsToProjectsCreateWithoutProjectInputSchema } from './PersonsToProjectsCreateWithoutProjectInputSchema';
import { PersonsToProjectsUncheckedCreateWithoutProjectInputSchema } from './PersonsToProjectsUncheckedCreateWithoutProjectInputSchema';

export const PersonsToProjectsCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.PersonsToProjectsCreateOrConnectWithoutProjectInput> = z.object({
  where: z.lazy(() => PersonsToProjectsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonsToProjectsCreateWithoutProjectInputSchema),z.lazy(() => PersonsToProjectsUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default PersonsToProjectsCreateOrConnectWithoutProjectInputSchema;
