import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToTagsScalarWhereInputSchema } from './PersonsToTagsScalarWhereInputSchema';
import { PersonsToTagsUpdateManyMutationInputSchema } from './PersonsToTagsUpdateManyMutationInputSchema';
import { PersonsToTagsUncheckedUpdateManyWithoutTagInputSchema } from './PersonsToTagsUncheckedUpdateManyWithoutTagInputSchema';

export const PersonsToTagsUpdateManyWithWhereWithoutTagInputSchema: z.ZodType<Prisma.PersonsToTagsUpdateManyWithWhereWithoutTagInput> = z.object({
  where: z.lazy(() => PersonsToTagsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PersonsToTagsUpdateManyMutationInputSchema),z.lazy(() => PersonsToTagsUncheckedUpdateManyWithoutTagInputSchema) ]),
}).strict();

export default PersonsToTagsUpdateManyWithWhereWithoutTagInputSchema;
