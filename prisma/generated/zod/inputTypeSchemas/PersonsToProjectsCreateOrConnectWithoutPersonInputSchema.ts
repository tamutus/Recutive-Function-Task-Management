import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToProjectsWhereUniqueInputSchema } from './PersonsToProjectsWhereUniqueInputSchema';
import { PersonsToProjectsCreateWithoutPersonInputSchema } from './PersonsToProjectsCreateWithoutPersonInputSchema';
import { PersonsToProjectsUncheckedCreateWithoutPersonInputSchema } from './PersonsToProjectsUncheckedCreateWithoutPersonInputSchema';

export const PersonsToProjectsCreateOrConnectWithoutPersonInputSchema: z.ZodType<Prisma.PersonsToProjectsCreateOrConnectWithoutPersonInput> = z.object({
  where: z.lazy(() => PersonsToProjectsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonsToProjectsCreateWithoutPersonInputSchema),z.lazy(() => PersonsToProjectsUncheckedCreateWithoutPersonInputSchema) ]),
}).strict();

export default PersonsToProjectsCreateOrConnectWithoutPersonInputSchema;
