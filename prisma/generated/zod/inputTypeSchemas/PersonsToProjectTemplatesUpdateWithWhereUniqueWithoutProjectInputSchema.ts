import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToProjectTemplatesWhereUniqueInputSchema } from './PersonsToProjectTemplatesWhereUniqueInputSchema';
import { PersonsToProjectTemplatesUpdateWithoutProjectInputSchema } from './PersonsToProjectTemplatesUpdateWithoutProjectInputSchema';
import { PersonsToProjectTemplatesUncheckedUpdateWithoutProjectInputSchema } from './PersonsToProjectTemplatesUncheckedUpdateWithoutProjectInputSchema';

export const PersonsToProjectTemplatesUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.PersonsToProjectTemplatesUpdateWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => PersonsToProjectTemplatesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PersonsToProjectTemplatesUpdateWithoutProjectInputSchema),z.lazy(() => PersonsToProjectTemplatesUncheckedUpdateWithoutProjectInputSchema) ]),
}).strict();

export default PersonsToProjectTemplatesUpdateWithWhereUniqueWithoutProjectInputSchema;
