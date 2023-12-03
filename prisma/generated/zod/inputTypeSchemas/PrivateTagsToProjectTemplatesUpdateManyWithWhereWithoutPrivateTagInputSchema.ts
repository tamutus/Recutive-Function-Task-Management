import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToProjectTemplatesScalarWhereInputSchema } from './PrivateTagsToProjectTemplatesScalarWhereInputSchema';
import { PrivateTagsToProjectTemplatesUpdateManyMutationInputSchema } from './PrivateTagsToProjectTemplatesUpdateManyMutationInputSchema';
import { PrivateTagsToProjectTemplatesUncheckedUpdateManyWithoutPrivateTagInputSchema } from './PrivateTagsToProjectTemplatesUncheckedUpdateManyWithoutPrivateTagInputSchema';

export const PrivateTagsToProjectTemplatesUpdateManyWithWhereWithoutPrivateTagInputSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesUpdateManyWithWhereWithoutPrivateTagInput> = z.object({
  where: z.lazy(() => PrivateTagsToProjectTemplatesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PrivateTagsToProjectTemplatesUpdateManyMutationInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesUncheckedUpdateManyWithoutPrivateTagInputSchema) ]),
}).strict();

export default PrivateTagsToProjectTemplatesUpdateManyWithWhereWithoutPrivateTagInputSchema;
