import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToProjectsWhereUniqueInputSchema } from './PersonsToProjectsWhereUniqueInputSchema';
import { PersonsToProjectsUpdateWithoutProjectInputSchema } from './PersonsToProjectsUpdateWithoutProjectInputSchema';
import { PersonsToProjectsUncheckedUpdateWithoutProjectInputSchema } from './PersonsToProjectsUncheckedUpdateWithoutProjectInputSchema';

export const PersonsToProjectsUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.PersonsToProjectsUpdateWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => PersonsToProjectsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PersonsToProjectsUpdateWithoutProjectInputSchema),z.lazy(() => PersonsToProjectsUncheckedUpdateWithoutProjectInputSchema) ]),
}).strict();

export default PersonsToProjectsUpdateWithWhereUniqueWithoutProjectInputSchema;
