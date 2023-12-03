import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToProjectTemplatesWhereUniqueInputSchema } from './PersonsToProjectTemplatesWhereUniqueInputSchema';
import { PersonsToProjectTemplatesUpdateWithoutPersonInputSchema } from './PersonsToProjectTemplatesUpdateWithoutPersonInputSchema';
import { PersonsToProjectTemplatesUncheckedUpdateWithoutPersonInputSchema } from './PersonsToProjectTemplatesUncheckedUpdateWithoutPersonInputSchema';

export const PersonsToProjectTemplatesUpdateWithWhereUniqueWithoutPersonInputSchema: z.ZodType<Prisma.PersonsToProjectTemplatesUpdateWithWhereUniqueWithoutPersonInput> = z.object({
  where: z.lazy(() => PersonsToProjectTemplatesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PersonsToProjectTemplatesUpdateWithoutPersonInputSchema),z.lazy(() => PersonsToProjectTemplatesUncheckedUpdateWithoutPersonInputSchema) ]),
}).strict();

export default PersonsToProjectTemplatesUpdateWithWhereUniqueWithoutPersonInputSchema;
