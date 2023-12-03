import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToProjectsScalarWhereInputSchema } from './PrivateTagsToProjectsScalarWhereInputSchema';
import { PrivateTagsToProjectsUpdateManyMutationInputSchema } from './PrivateTagsToProjectsUpdateManyMutationInputSchema';
import { PrivateTagsToProjectsUncheckedUpdateManyWithoutProjectInputSchema } from './PrivateTagsToProjectsUncheckedUpdateManyWithoutProjectInputSchema';

export const PrivateTagsToProjectsUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.PrivateTagsToProjectsUpdateManyWithWhereWithoutProjectInput> = z.object({
  where: z.lazy(() => PrivateTagsToProjectsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PrivateTagsToProjectsUpdateManyMutationInputSchema),z.lazy(() => PrivateTagsToProjectsUncheckedUpdateManyWithoutProjectInputSchema) ]),
}).strict();

export default PrivateTagsToProjectsUpdateManyWithWhereWithoutProjectInputSchema;
