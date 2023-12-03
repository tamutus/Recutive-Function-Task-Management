import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToTaskTemplatesWhereUniqueInputSchema } from './PersonsToTaskTemplatesWhereUniqueInputSchema';
import { PersonsToTaskTemplatesUpdateWithoutPersonInputSchema } from './PersonsToTaskTemplatesUpdateWithoutPersonInputSchema';
import { PersonsToTaskTemplatesUncheckedUpdateWithoutPersonInputSchema } from './PersonsToTaskTemplatesUncheckedUpdateWithoutPersonInputSchema';

export const PersonsToTaskTemplatesUpdateWithWhereUniqueWithoutPersonInputSchema: z.ZodType<Prisma.PersonsToTaskTemplatesUpdateWithWhereUniqueWithoutPersonInput> = z.object({
  where: z.lazy(() => PersonsToTaskTemplatesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PersonsToTaskTemplatesUpdateWithoutPersonInputSchema),z.lazy(() => PersonsToTaskTemplatesUncheckedUpdateWithoutPersonInputSchema) ]),
}).strict();

export default PersonsToTaskTemplatesUpdateWithWhereUniqueWithoutPersonInputSchema;
