import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { ProjectTemplateUpdatelinksInputSchema } from './ProjectTemplateUpdatelinksInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { PersonsToProjectTemplatesUpdateManyWithoutProjectNestedInputSchema } from './PersonsToProjectTemplatesUpdateManyWithoutProjectNestedInputSchema';
import { EnergiesToProjectTemplatesUpdateManyWithoutProjectNestedInputSchema } from './EnergiesToProjectTemplatesUpdateManyWithoutProjectNestedInputSchema';
import { PrivateEnergiesToProjectTemplatesUpdateManyWithoutProjectNestedInputSchema } from './PrivateEnergiesToProjectTemplatesUpdateManyWithoutProjectNestedInputSchema';
import { PrivateTagsToProjectTemplatesUpdateManyWithoutProjectNestedInputSchema } from './PrivateTagsToProjectTemplatesUpdateManyWithoutProjectNestedInputSchema';
import { ProjectTemplatesToTaskTemplatesUpdateManyWithoutProjectNestedInputSchema } from './ProjectTemplatesToTaskTemplatesUpdateManyWithoutProjectNestedInputSchema';
import { ProjectUpdateManyWithoutTemplateNestedInputSchema } from './ProjectUpdateManyWithoutTemplateNestedInputSchema';

export const ProjectTemplateUpdateWithoutTagsInputSchema: z.ZodType<Prisma.ProjectTemplateUpdateWithoutTagsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  info: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  completionRequirements: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  links: z.union([ z.lazy(() => ProjectTemplateUpdatelinksInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  collaborators: z.lazy(() => PersonsToProjectTemplatesUpdateManyWithoutProjectNestedInputSchema).optional(),
  energies: z.lazy(() => EnergiesToProjectTemplatesUpdateManyWithoutProjectNestedInputSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToProjectTemplatesUpdateManyWithoutProjectNestedInputSchema).optional(),
  privateTags: z.lazy(() => PrivateTagsToProjectTemplatesUpdateManyWithoutProjectNestedInputSchema).optional(),
  tasks: z.lazy(() => ProjectTemplatesToTaskTemplatesUpdateManyWithoutProjectNestedInputSchema).optional(),
  implementations: z.lazy(() => ProjectUpdateManyWithoutTemplateNestedInputSchema).optional()
}).strict();

export default ProjectTemplateUpdateWithoutTagsInputSchema;
