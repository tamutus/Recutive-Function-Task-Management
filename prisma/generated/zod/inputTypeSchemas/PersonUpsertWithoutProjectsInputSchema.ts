import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonUpdateWithoutProjectsInputSchema } from './PersonUpdateWithoutProjectsInputSchema';
import { PersonUncheckedUpdateWithoutProjectsInputSchema } from './PersonUncheckedUpdateWithoutProjectsInputSchema';
import { PersonCreateWithoutProjectsInputSchema } from './PersonCreateWithoutProjectsInputSchema';
import { PersonUncheckedCreateWithoutProjectsInputSchema } from './PersonUncheckedCreateWithoutProjectsInputSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const PersonUpsertWithoutProjectsInputSchema: z.ZodType<Prisma.PersonUpsertWithoutProjectsInput> = z.object({
  update: z.union([ z.lazy(() => PersonUpdateWithoutProjectsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutProjectsInputSchema) ]),
  create: z.union([ z.lazy(() => PersonCreateWithoutProjectsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutProjectsInputSchema) ]),
  where: z.lazy(() => PersonWhereInputSchema).optional()
}).strict();

export default PersonUpsertWithoutProjectsInputSchema;
