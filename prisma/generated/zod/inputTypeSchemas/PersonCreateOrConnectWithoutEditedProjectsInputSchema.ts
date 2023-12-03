import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonCreateWithoutEditedProjectsInputSchema } from './PersonCreateWithoutEditedProjectsInputSchema';
import { PersonUncheckedCreateWithoutEditedProjectsInputSchema } from './PersonUncheckedCreateWithoutEditedProjectsInputSchema';

export const PersonCreateOrConnectWithoutEditedProjectsInputSchema: z.ZodType<Prisma.PersonCreateOrConnectWithoutEditedProjectsInput> = z.object({
  where: z.lazy(() => PersonWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonCreateWithoutEditedProjectsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutEditedProjectsInputSchema) ]),
}).strict();

export default PersonCreateOrConnectWithoutEditedProjectsInputSchema;
