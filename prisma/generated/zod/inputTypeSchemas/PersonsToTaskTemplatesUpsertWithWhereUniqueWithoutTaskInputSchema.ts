import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToTaskTemplatesWhereUniqueInputSchema } from './PersonsToTaskTemplatesWhereUniqueInputSchema';
import { PersonsToTaskTemplatesUpdateWithoutTaskInputSchema } from './PersonsToTaskTemplatesUpdateWithoutTaskInputSchema';
import { PersonsToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema } from './PersonsToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema';
import { PersonsToTaskTemplatesCreateWithoutTaskInputSchema } from './PersonsToTaskTemplatesCreateWithoutTaskInputSchema';
import { PersonsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema } from './PersonsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema';

export const PersonsToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInputSchema: z.ZodType<Prisma.PersonsToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInput> = z.object({
  where: z.lazy(() => PersonsToTaskTemplatesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PersonsToTaskTemplatesUpdateWithoutTaskInputSchema),z.lazy(() => PersonsToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema) ]),
  create: z.union([ z.lazy(() => PersonsToTaskTemplatesCreateWithoutTaskInputSchema),z.lazy(() => PersonsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema) ]),
}).strict();

export default PersonsToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInputSchema;
