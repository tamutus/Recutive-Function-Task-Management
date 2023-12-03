import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToProjectsScalarWhereInputSchema } from './PrivateTagsToProjectsScalarWhereInputSchema';
import { PrivateTagsToProjectsUpdateManyMutationInputSchema } from './PrivateTagsToProjectsUpdateManyMutationInputSchema';
import { PrivateTagsToProjectsUncheckedUpdateManyWithoutTagInputSchema } from './PrivateTagsToProjectsUncheckedUpdateManyWithoutTagInputSchema';

export const PrivateTagsToProjectsUpdateManyWithWhereWithoutTagInputSchema: z.ZodType<Prisma.PrivateTagsToProjectsUpdateManyWithWhereWithoutTagInput> = z.object({
  where: z.lazy(() => PrivateTagsToProjectsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PrivateTagsToProjectsUpdateManyMutationInputSchema),z.lazy(() => PrivateTagsToProjectsUncheckedUpdateManyWithoutTagInputSchema) ]),
}).strict();

export default PrivateTagsToProjectsUpdateManyWithWhereWithoutTagInputSchema;
