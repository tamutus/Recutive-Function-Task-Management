import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToTaskTemplatesWhereUniqueInputSchema } from './PersonsToTaskTemplatesWhereUniqueInputSchema';
import { PersonsToTaskTemplatesCreateWithoutTaskInputSchema } from './PersonsToTaskTemplatesCreateWithoutTaskInputSchema';
import { PersonsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema } from './PersonsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema';

export const PersonsToTaskTemplatesCreateOrConnectWithoutTaskInputSchema: z.ZodType<Prisma.PersonsToTaskTemplatesCreateOrConnectWithoutTaskInput> = z.object({
  where: z.lazy(() => PersonsToTaskTemplatesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonsToTaskTemplatesCreateWithoutTaskInputSchema),z.lazy(() => PersonsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema) ]),
}).strict();

export default PersonsToTaskTemplatesCreateOrConnectWithoutTaskInputSchema;
