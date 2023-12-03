import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToProjectsWhereUniqueInputSchema } from './PersonsToProjectsWhereUniqueInputSchema';
import { PersonsToProjectsUpdateWithoutPersonInputSchema } from './PersonsToProjectsUpdateWithoutPersonInputSchema';
import { PersonsToProjectsUncheckedUpdateWithoutPersonInputSchema } from './PersonsToProjectsUncheckedUpdateWithoutPersonInputSchema';

export const PersonsToProjectsUpdateWithWhereUniqueWithoutPersonInputSchema: z.ZodType<Prisma.PersonsToProjectsUpdateWithWhereUniqueWithoutPersonInput> = z.object({
  where: z.lazy(() => PersonsToProjectsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PersonsToProjectsUpdateWithoutPersonInputSchema),z.lazy(() => PersonsToProjectsUncheckedUpdateWithoutPersonInputSchema) ]),
}).strict();

export default PersonsToProjectsUpdateWithWhereUniqueWithoutPersonInputSchema;
