import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToTaskTemplatesScalarWhereInputSchema } from './PrivateTagsToTaskTemplatesScalarWhereInputSchema';
import { PrivateTagsToTaskTemplatesUpdateManyMutationInputSchema } from './PrivateTagsToTaskTemplatesUpdateManyMutationInputSchema';
import { PrivateTagsToTaskTemplatesUncheckedUpdateManyWithoutTagInputSchema } from './PrivateTagsToTaskTemplatesUncheckedUpdateManyWithoutTagInputSchema';

export const PrivateTagsToTaskTemplatesUpdateManyWithWhereWithoutTagInputSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesUpdateManyWithWhereWithoutTagInput> = z.object({
  where: z.lazy(() => PrivateTagsToTaskTemplatesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PrivateTagsToTaskTemplatesUpdateManyMutationInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesUncheckedUpdateManyWithoutTagInputSchema) ]),
}).strict();

export default PrivateTagsToTaskTemplatesUpdateManyWithWhereWithoutTagInputSchema;
