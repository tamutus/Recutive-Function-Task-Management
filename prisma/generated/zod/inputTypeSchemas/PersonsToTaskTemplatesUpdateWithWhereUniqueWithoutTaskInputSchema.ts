import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToTaskTemplatesWhereUniqueInputSchema } from './PersonsToTaskTemplatesWhereUniqueInputSchema';
import { PersonsToTaskTemplatesUpdateWithoutTaskInputSchema } from './PersonsToTaskTemplatesUpdateWithoutTaskInputSchema';
import { PersonsToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema } from './PersonsToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema';

export const PersonsToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInputSchema: z.ZodType<Prisma.PersonsToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInput> = z.object({
  where: z.lazy(() => PersonsToTaskTemplatesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PersonsToTaskTemplatesUpdateWithoutTaskInputSchema),z.lazy(() => PersonsToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema) ]),
}).strict();

export default PersonsToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInputSchema;
