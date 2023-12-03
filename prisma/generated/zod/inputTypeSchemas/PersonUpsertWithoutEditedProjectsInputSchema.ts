import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonUpdateWithoutEditedProjectsInputSchema } from './PersonUpdateWithoutEditedProjectsInputSchema';
import { PersonUncheckedUpdateWithoutEditedProjectsInputSchema } from './PersonUncheckedUpdateWithoutEditedProjectsInputSchema';
import { PersonCreateWithoutEditedProjectsInputSchema } from './PersonCreateWithoutEditedProjectsInputSchema';
import { PersonUncheckedCreateWithoutEditedProjectsInputSchema } from './PersonUncheckedCreateWithoutEditedProjectsInputSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const PersonUpsertWithoutEditedProjectsInputSchema: z.ZodType<Prisma.PersonUpsertWithoutEditedProjectsInput> = z.object({
  update: z.union([ z.lazy(() => PersonUpdateWithoutEditedProjectsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutEditedProjectsInputSchema) ]),
  create: z.union([ z.lazy(() => PersonCreateWithoutEditedProjectsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutEditedProjectsInputSchema) ]),
  where: z.lazy(() => PersonWhereInputSchema).optional()
}).strict();

export default PersonUpsertWithoutEditedProjectsInputSchema;
