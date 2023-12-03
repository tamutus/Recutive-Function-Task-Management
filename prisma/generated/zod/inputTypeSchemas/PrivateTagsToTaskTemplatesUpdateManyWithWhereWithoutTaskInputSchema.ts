import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToTaskTemplatesScalarWhereInputSchema } from './PrivateTagsToTaskTemplatesScalarWhereInputSchema';
import { PrivateTagsToTaskTemplatesUpdateManyMutationInputSchema } from './PrivateTagsToTaskTemplatesUpdateManyMutationInputSchema';
import { PrivateTagsToTaskTemplatesUncheckedUpdateManyWithoutTaskInputSchema } from './PrivateTagsToTaskTemplatesUncheckedUpdateManyWithoutTaskInputSchema';

export const PrivateTagsToTaskTemplatesUpdateManyWithWhereWithoutTaskInputSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesUpdateManyWithWhereWithoutTaskInput> = z.object({
  where: z.lazy(() => PrivateTagsToTaskTemplatesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PrivateTagsToTaskTemplatesUpdateManyMutationInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesUncheckedUpdateManyWithoutTaskInputSchema) ]),
}).strict();

export default PrivateTagsToTaskTemplatesUpdateManyWithWhereWithoutTaskInputSchema;
