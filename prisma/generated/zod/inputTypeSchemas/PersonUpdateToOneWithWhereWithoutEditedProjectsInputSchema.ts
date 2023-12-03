import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { PersonUpdateWithoutEditedProjectsInputSchema } from './PersonUpdateWithoutEditedProjectsInputSchema';
import { PersonUncheckedUpdateWithoutEditedProjectsInputSchema } from './PersonUncheckedUpdateWithoutEditedProjectsInputSchema';

export const PersonUpdateToOneWithWhereWithoutEditedProjectsInputSchema: z.ZodType<Prisma.PersonUpdateToOneWithWhereWithoutEditedProjectsInput> = z.object({
  where: z.lazy(() => PersonWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PersonUpdateWithoutEditedProjectsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutEditedProjectsInputSchema) ]),
}).strict();

export default PersonUpdateToOneWithWhereWithoutEditedProjectsInputSchema;
